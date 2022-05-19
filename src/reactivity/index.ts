import {createDomNode, getParentClassComponentProps} from '../create-functions';
import {Router} from '../router';
import {
    Component,
    EffectTags,
    FiberNode,
    GlobalStateType,
    NodeTypes,
    PropsType,
} from '../types';

const queue: FiberNode[] = [];
const nodesToDeleteFromDom: FiberNode[] = [];
let router: Router | undefined;
let componentProps: PropsType = {};
let isWorking = false;
const globalState: GlobalStateType = {
    nodesToDeleteFromDom: nodesToDeleteFromDom,
    uncommitedRootNode: undefined,
    currentRootNode: undefined,
    wipNode: undefined,
    hookIndex: 0,
    addNodeToQueue: (node: FiberNode) => {
        queue.push(node);
        if (!isWorking) requestIdleCallback(runJobQueue);
    },
};

// eslint-disable-next-line require-jsdoc
function render(element: FiberNode, container: HTMLElement, props: PropsType) {
    if (
        element.value &&
        typeof element.value === 'function' &&
        element.value.prototype instanceof Component
    ) {
        globalState.uncommitedRootNode = {
            // TODO: fix it
            type: NodeTypes.unitOfWork,
            dom: container,
            effectTag: EffectTags.create,
            children: [
                {
                    type: element.type,
                    effectTag: EffectTags.create,
                    children: element.children,
                    value: element.value,
                    props: element.props,
                    componentName: element.componentName,
                    isClassComponent: true,
                },
            ],
            previousCommittedRootNode: globalState.currentRootNode,
        };
    } else {
        globalState.uncommitedRootNode = {
            // TODO: fix it
            type: NodeTypes.unitOfWork,
            dom: container,
            value: element.value,
            props: {...props, ...element.props},
            effectTag: EffectTags.create,
            children: element.children,
            previousCommittedRootNode: globalState.currentRootNode,
        };
    }
    globalState.uncommitedRootNode.parentComponent =
        globalState.uncommitedRootNode;
    componentProps = props;
    componentProps.globalState = globalState;
    const nextNode = globalState.uncommitedRootNode;
    queue.push(nextNode);
}

// eslint-disable-next-line require-jsdoc
function workWithDom(node: FiberNode | undefined) {
    if (!node || !node.parent) {
        return;
    }

    let domParentNode = node.parent;
    while (!domParentNode.dom) {
        domParentNode = domParentNode.parent!;
    }
    const domParent = domParentNode.dom;

    if (node.effectTag === EffectTags.create && node.dom) {
        // TODO: check it
        domParent.appendChild(node.dom);
    }
    if (node.effectTag === EffectTags.delete) {
        commitDeletion(node, domParent);
    }
    if (node.effectTag === EffectTags.update) {
        updateDomNode(node);
    }
    workWithDom(node.firstChild);
    workWithDom(node.sibling);
}

// eslint-disable-next-line require-jsdoc
function commitDeletion(node: FiberNode, domParent: HTMLElement | Text) {
    if (node.dom) {
        domParent.removeChild(node.dom);
    } else {
        commitDeletion(node.firstChild!, domParent);
    }
}

// eslint-disable-next-line require-jsdoc
function updateDomNode(node: FiberNode) {
    if (node.type === NodeTypes.funcNode && !node.isClassComponent) {
        const joinedProps = {
            ...node.props,
            ...getParentClassComponentProps(node),
        };
        const computedValue = (node.value as Function)(joinedProps);
        if (
            (typeof computedValue === 'string' ||
                typeof computedValue === 'number') &&
            node.dom &&
            'data' in node.dom
        ) {
            if (computedValue !== node.dom.data) {
                const newDomNode = document.createTextNode(
                    computedValue.toString()
                );
                node.parent!.dom!.replaceChild(newDomNode, node.dom);
                node.dom = newDomNode;
            }
        }
    }

    const isEvent = (key: string) => key.startsWith('on');
    const isProperty = (key: string) => key !== 'children';
    const isNew =
        (prev: PropsType | undefined, next: PropsType | undefined) =>
        (key: string) =>
            (prev && next && prev[key] !== next[key]) || (!prev && next);
    const isGone = (next: PropsType | undefined) => (key: string) =>
        (next && !(key in next)) || !next;

    const prevProps = node.previousCommittedRootNode!.props;
    const currentProps = node.props;

    if (prevProps) {
        Object.keys(prevProps)
            .filter(isEvent)
            .filter(isNew(prevProps, currentProps))
            .forEach(name => {
                const eventType = name.toLowerCase().substring(2);
                node.dom!.removeEventListener(eventType, prevProps[name]);
            });

        Object.keys(prevProps)
            .filter(isProperty)
            .filter(isGone(currentProps))
            .forEach(propName => ((node.dom as any)[propName] = ''));
    }
    if (currentProps) {
        Object.keys(currentProps)
            .filter(isProperty)
            .filter(isNew(prevProps, currentProps))
            .forEach(propName => {
                if (typeof currentProps[propName] === 'string') {
                    (node.dom as any)[propName] = currentProps[propName];
                }
                if (typeof currentProps[propName] === 'function') {
                    const joinedProps = {
                        ...node.props,
                        ...getParentClassComponentProps(node),
                    };
                    if (node.dom) {
                        (node.dom as any)[propName] = (
                            currentProps[propName] as Function
                        )(joinedProps);
                    }
                }
            });

        Object.keys(currentProps)
            .filter(isEvent)
            .filter(isNew(prevProps, currentProps))
            .forEach(name => {
                const eventType = name.toLowerCase().substring(2);
                node.dom!.addEventListener(eventType, currentProps[name]);
            });
    }
}

// eslint-disable-next-line require-jsdoc
function runJobQueue(deadline: IdleDeadline) {
    let canRender = true;
    while (canRender && queue.length > 0) {
        isWorking = true;

        const currentNode = queue[0];
        queue.shift();
        const nextNode = applyJob(currentNode);
        if (nextNode) {
            queue.push(nextNode);
        }
        canRender = deadline.timeRemaining() < 1;
    }

    if (queue.length) {
        requestIdleCallback(runJobQueue);
    } else if (globalState.uncommitedRootNode) {
        isWorking = false;
        nodesToDeleteFromDom.forEach(workWithDom);

        // we need add root node to DOM separately of creating DOM element
        // because it can take more time that we want
        if (globalState.uncommitedRootNode.firstChild) {
            workWithDom(globalState.uncommitedRootNode.firstChild);
        }
        let mainRootNode = globalState.uncommitedRootNode;
        while (mainRootNode.parent && Object.keys(mainRootNode.parent).length) {
            mainRootNode = mainRootNode.parent;
        }
        globalState.currentRootNode = mainRootNode;
        globalState.uncommitedRootNode = undefined;

        // if
        if (document.body.style.display === 'none') {
            document.body.style.display = 'block';
            router!.push('/');
        }
    }
}

// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function applyJob(node: FiberNode) {
    const isClassComponent =
        node.value &&
        typeof node.value === 'function' &&
        node.value.prototype instanceof Component;

    if (isClassComponent) {
        updateClassComponent(node);
    } else {
        updateHostComponent(node);
    }

    // if node has a child we should apply job to it
    if (node.firstChild) {
        return node.firstChild;
    }

    // else if node has a siblind we should apply job to it
    // if node doesn't have a sibling nor child do nothing
    let nextNode = node;
    while (nextNode) {
        if (nextNode.sibling) {
            return nextNode.sibling;
        }
        // TODO: fix it
        nextNode = nextNode.parent!;
    }
}

// eslint-disable-next-line require-jsdoc
function updateHostComponent(node: FiberNode) {
    if (!node.dom) {
        node.dom = createDomNode(node);
    }
    updateChildrenNode(node, node.children);
}

// eslint-disable-next-line require-jsdoc
function updateClassComponent(node: FiberNode) {
    globalState.hookIndex = 0;
    globalState.wipNode = node;
    globalState.wipNode.hooks =
        globalState.wipNode.previousCommittedRootNode &&
        globalState.wipNode.previousCommittedRootNode.hooks &&
        Array.isArray(globalState.wipNode.previousCommittedRootNode.hooks)
            ? [...globalState.wipNode.previousCommittedRootNode.hooks]
            : [];
    node.props = {...node.props, globalState};
    const component = new (node.value! as typeof Component)(node.props);
    node.children = node.children.length ? node.children : [component.render()];
    node.isClassComponent = true;
    node.parentComponent = node;
    node.componentInstance = component;

    if (router && Object.values(router.routes).includes(node.componentName!)) {
        router.addComponentNode(node, node.componentName!);
    }

    updateChildrenNode(node, node.children);
}

// eslint-disable-next-line require-jsdoc
function updateChildrenNode(node: FiberNode, children: FiberNode[]) {
    let index = 0;
    let prevSibling: FiberNode | undefined;
    let committedNode: FiberNode | undefined =
        node.previousCommittedRootNode?.firstChild ?? undefined;

    while (index < children.length || committedNode) {
        let childNode = children[index];

        if (committedNode && committedNode.type === childNode.type) {
            // update node props
            childNode = {
                type: childNode.type,
                effectTag: EffectTags.update,
                props: childNode.props,
                children: childNode.children,
                firstChild: childNode.firstChild,
                sibling: childNode.sibling,
                value: childNode.value,
                dom: committedNode.dom,
                previousCommittedRootNode: committedNode,
                parent: node,
                isClassComponent: childNode.isClassComponent,
                hooks: childNode.hooks,
                componentInstance: childNode.componentInstance,
            };
            childNode.parentComponent =
                childNode.parent && childNode.parent.isClassComponent
                    ? childNode.parent
                    : childNode.parent
                    ? childNode.parent.parentComponent
                    : childNode;
        }
        if (committedNode && committedNode.type !== childNode.type) {
            // delete old node and add new node
            committedNode.effectTag = EffectTags.delete;
            nodesToDeleteFromDom.push(committedNode);
            // TODO: check it
            childNode = {
                type: childNode.type,
                effectTag: EffectTags.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
                isClassComponent: childNode.isClassComponent,
                firstChild: childNode.firstChild,
                sibling: childNode.sibling,
                hooks: childNode.hooks,
                componentName: childNode.componentName,
                componentInstance: childNode.componentInstance,
            };
            childNode.parentComponent =
                childNode.parent && childNode.parent.isClassComponent
                    ? childNode.parent
                    : childNode.parent
                    ? childNode.parent.parentComponent
                    : childNode;
        }
        if (!committedNode && childNode) {
            // add new node
            childNode = {
                type: childNode.type,
                effectTag: EffectTags.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
                hooks: childNode.hooks,
                isClassComponent: childNode.isClassComponent,
                componentName: childNode.componentName,
                componentInstance: childNode.componentInstance,
            };
            childNode.parentComponent =
                childNode.parent && childNode.parent.isClassComponent
                    ? childNode.parent
                    : childNode.parent
                    ? childNode.parent.parentComponent
                    : childNode;
        }

        if (committedNode) {
            committedNode = committedNode.sibling;
        }

        if (childNode.type)
            if (prevSibling) {
                prevSibling!.sibling = childNode;
            } else {
                node.firstChild = childNode;
            }

        prevSibling = childNode;
        children[index] = childNode;
        index++;
    }
}

// eslint-disable-next-line require-jsdoc
export function init(
    element: FiberNode,
    containerSelector: string,
    props: PropsType,
    routerObj?: Router
) {
    const domContainer: HTMLElement | null =
        document.querySelector(containerSelector);
    if (routerObj) {
        router = routerObj;
        // hide before router will select main component for '/' path
        document.body.style.display = 'none';
    }
    if (domContainer) {
        render(element, domContainer, props);
        requestIdleCallback(runJobQueue);
    } else {
        throw new Error(
            `Can't find element with selector ${containerSelector}`
        );
    }
}

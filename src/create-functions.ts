import {
    CompNode,
    Component,
    EffectTags,
    FiberNode,
    NodeTypes,
    PropsType,
} from './types';

/**
 * Creating node containing only text
 * @param {string} text - text content for HTMLElement
 * @return {FiberNode} text node
 */
export function createTextNode(text: string): FiberNode {
    const textNode: FiberNode = {
        type: NodeTypes.textNode,
        effectTag: EffectTags.create,
        value: text,
        children: [],
    };
    return textNode;
}

/**
 * Creating node containing only text
 * @param {Function} func - text content for HTMLElement
 * @return {FiberNode} text node
 */
export function createFuncNode(func: Function): FiberNode {
    const functNode: FiberNode = {
        type: NodeTypes.funcNode,
        effectTag: EffectTags.create,
        value: func,
        children: [],
    };
    return functNode;
}

// eslint-disable-next-line require-jsdoc
export function createComponentNode(node: CompNode): FiberNode {
    const functNode: FiberNode = {
        type: NodeTypes.compNode,
        effectTag: EffectTags.create,
        value: node.compConstructor,
        props: node.props,
        children: [],
    };
    return functNode;
}

/**
 *
 * @param {NodeTypes} type - type of node
 * @param {object} props - node properties
 * @param {Function} componentConstructor - constructor of class extending Component
 * @param {FiberNode[]} children - node children
 * @return {FiberNode} - node instance
 */
export function createNode(
    type: NodeTypes | string,
    props: PropsType,
    componentConstructor?: typeof Component,
    ...children: (FiberNode | string | Function | CompNode)[]
): FiberNode {
    const node: FiberNode = {
        type,
        props,
        value: componentConstructor,
        effectTag: EffectTags.create,
        children: children.map(el => {
            if (typeof el === 'string') {
                return createTextNode(el);
            } else if (typeof el === 'function') {
                return createFuncNode(el);
            } else if (typeof el === 'object' && 'compConstructor' in el) {
                return createComponentNode(el);
            } else {
                return el;
            }
        }),
    };
    return node;
}

/**
 * Create DOM object from Node interface instance
 * @param {FiberNode} node - fiber node instance
 * @return {HTMLElement} domNode
 */
export function createDomNode(node: FiberNode): HTMLElement | Text {
    const joinedProps = {...node.props, ...getParentClassComponentProps(node)};
    if (node.type === NodeTypes.textNode && node.value) {
        const textDomNode = document.createTextNode(node.value as string);
        return textDomNode;
    }
    if (
        (node.type === NodeTypes.funcNode ||
            node.type === NodeTypes.compNode) &&
        node.value
    ) {
        const computedValue = (node.value as Function)(joinedProps);
        // TODO: if computedValue contains component or arrays of component
        // add them to parent node

        const computedTextDomNode = document.createTextNode(computedValue);
        return computedTextDomNode;
    }

    const domNode = document.createElement(node.type);
    if (node.props) {
        Object.entries(node.props).map(([propName, propValue]) => {
            // TODO: fix it
            if (typeof propValue === 'string') {
                (domNode as any)[propName] = propValue;
            }
            if (typeof propValue === 'function') {
                (domNode as any)[propName] = () => propValue(joinedProps);
            }
        });
    }

    return domNode;
}

// eslint-disable-next-line require-jsdoc
export function getParentClassComponentProps(node: FiberNode) {
    if (node.parentComponent) {
        return node.parentComponent.props;
    } else {
        return node.props;
    }
    // let parentNode: FiberNode | undefined = node.parent;
    // let parentComponentProps: PropsType = {};
    // console.log(parentNode);
    // while (parentNode && Object.keys(parentNode).length) {
    //     if (
    //         parentNode.parentComponentProps &&
    //         Object.keys(parentNode.parentComponentProps).length
    //     ) {
    //         parentComponentProps = parentNode.parentComponentProps;
    //         break;
    //     }
    //     parentNode = parentNode.parent;
    // }
    // return parentComponentProps;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
var $c460bbb0b55413ff$exports = {};

$parcel$export($c460bbb0b55413ff$exports, "createTextNode", () => $c460bbb0b55413ff$export$b2ce9ad90858ed7a);
$parcel$export($c460bbb0b55413ff$exports, "createFuncNode", () => $c460bbb0b55413ff$export$799c61d34e780353);
$parcel$export($c460bbb0b55413ff$exports, "createComponentNode", () => $c460bbb0b55413ff$export$fefd1e69396ee10d);
$parcel$export($c460bbb0b55413ff$exports, "createNode", () => $c460bbb0b55413ff$export$270e7ba5936d3c48);
$parcel$export($c460bbb0b55413ff$exports, "createDomNode", () => $c460bbb0b55413ff$export$34d901be6c9525f9);
$parcel$export($c460bbb0b55413ff$exports, "getParentClassComponentProps", () => $c460bbb0b55413ff$export$d74f66a29f3b4c2c);
var $81c1b644006d48ec$exports = {};

$parcel$export($81c1b644006d48ec$exports, "NodeTypes", () => $81c1b644006d48ec$export$2ed9472effad1b70);
$parcel$export($81c1b644006d48ec$exports, "EffectTags", () => $81c1b644006d48ec$export$ea8d20c92e194fd2);
$parcel$export($81c1b644006d48ec$exports, "Component", () => $81c1b644006d48ec$export$16fa2f45be04daa8);
let $81c1b644006d48ec$export$2ed9472effad1b70;
(function($81c1b644006d48ec$export$2ed9472effad1b70) {
    $81c1b644006d48ec$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "textNode"] = 'TEXT_NODE';
    $81c1b644006d48ec$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "unitOfWork"] = 'UNIT_OF_WORK';
    $81c1b644006d48ec$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "funcNode"] = 'FUNC_NODE';
    $81c1b644006d48ec$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "compNode"] = 'COMP_NODE';
})($81c1b644006d48ec$export$2ed9472effad1b70 || ($81c1b644006d48ec$export$2ed9472effad1b70 = {}));
let $81c1b644006d48ec$export$ea8d20c92e194fd2;
(function($81c1b644006d48ec$export$ea8d20c92e194fd2) {
    $81c1b644006d48ec$export$ea8d20c92e194fd2[// eslint-disable-next-line no-unused-vars
    "update"] = 'UPDATE';
    $81c1b644006d48ec$export$ea8d20c92e194fd2[// eslint-disable-next-line no-unused-vars
    "delete"] = 'DELETE';
    $81c1b644006d48ec$export$ea8d20c92e194fd2[// eslint-disable-next-line no-unused-vars
    "create"] = 'CREATE';
})($81c1b644006d48ec$export$ea8d20c92e194fd2 || ($81c1b644006d48ec$export$ea8d20c92e194fd2 = {}));
class $81c1b644006d48ec$export$16fa2f45be04daa8 {
    render() {
        return {
            type: '',
            children: []
        };
    }
    constructor(parentProps){
        this.parentProps = parentProps;
    }
}


function $c460bbb0b55413ff$export$b2ce9ad90858ed7a(text) {
    const textNode = {
        type: $81c1b644006d48ec$export$2ed9472effad1b70.textNode,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        value: text,
        children: []
    };
    return textNode;
}
function $c460bbb0b55413ff$export$799c61d34e780353(func) {
    const functNode = {
        type: $81c1b644006d48ec$export$2ed9472effad1b70.funcNode,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        value: func,
        children: []
    };
    return functNode;
}
function $c460bbb0b55413ff$export$fefd1e69396ee10d(node) {
    const functNode = {
        type: $81c1b644006d48ec$export$2ed9472effad1b70.compNode,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        value: node.compConstructor,
        props: node.props,
        children: []
    };
    return functNode;
}
function $c460bbb0b55413ff$export$270e7ba5936d3c48(type, props, componentConstructor, ...children) {
    const node = {
        type: type,
        props: props,
        value: componentConstructor,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        children: children.map((el)=>{
            if (typeof el === 'string') return $c460bbb0b55413ff$export$b2ce9ad90858ed7a(el);
            else if (typeof el === 'function') return $c460bbb0b55413ff$export$799c61d34e780353(el);
            else if (typeof el === 'object' && 'compConstructor' in el) return $c460bbb0b55413ff$export$fefd1e69396ee10d(el);
            else return el;
        })
    };
    return node;
}
function $c460bbb0b55413ff$export$34d901be6c9525f9(node) {
    const joinedProps = {
        ...node.props,
        ...$c460bbb0b55413ff$export$d74f66a29f3b4c2c(node)
    };
    if (node.type === $81c1b644006d48ec$export$2ed9472effad1b70.textNode && node.value) {
        const textDomNode = document.createTextNode(node.value);
        return textDomNode;
    }
    if ((node.type === $81c1b644006d48ec$export$2ed9472effad1b70.funcNode || node.type === $81c1b644006d48ec$export$2ed9472effad1b70.compNode) && node.value) {
        const computedValue = node.value(joinedProps);
        // TODO: if computedValue contains component or arrays of component
        // add them to parent node
        const computedTextDomNode = document.createTextNode(computedValue);
        return computedTextDomNode;
    }
    const domNode = document.createElement(node.type);
    if (node.props) Object.entries(node.props).map(([propName, propValue])=>{
        // TODO: fix it
        if (typeof propValue === 'string') domNode[propName] = propValue;
        if (typeof propValue === 'function') domNode[propName] = ()=>propValue(joinedProps)
        ;
    });
    return domNode;
}
function $c460bbb0b55413ff$export$d74f66a29f3b4c2c(node) {
    if (node.parentComponent) return node.parentComponent.props;
    else return node.props;
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


var $6c347e4e9f440a08$exports = {};

$parcel$export($6c347e4e9f440a08$exports, "init", () => $6c347e4e9f440a08$export$2cd8252107eb640b);


const $6c347e4e9f440a08$var$queue = [];
const $6c347e4e9f440a08$var$nodesToDeleteFromDom = [];
let $6c347e4e9f440a08$var$componentProps = {};
let $6c347e4e9f440a08$var$isWorking = false;
const $6c347e4e9f440a08$var$globalState = {
    nodesToDeleteFromDom: $6c347e4e9f440a08$var$nodesToDeleteFromDom,
    uncommitedRootNode: undefined,
    currentRootNode: undefined,
    wipNode: undefined,
    hookIndex: 0,
    addNodeToQueue: (node)=>{
        $6c347e4e9f440a08$var$queue.push(node);
        console.log('called');
        if (!$6c347e4e9f440a08$var$isWorking) requestIdleCallback($6c347e4e9f440a08$var$runJobQueue);
    }
};
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$render(element, container, props) {
    if (element.value && typeof element.value === 'function' && element.value.prototype instanceof $81c1b644006d48ec$export$16fa2f45be04daa8) $6c347e4e9f440a08$var$globalState.uncommitedRootNode = {
        // TODO: fix it
        type: $81c1b644006d48ec$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        children: [
            {
                type: element.type,
                effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
                children: element.children,
                value: element.value,
                props: element.props,
                isClassComponent: true
            }, 
        ],
        previousCommittedRootNode: $6c347e4e9f440a08$var$globalState.currentRootNode
    };
    else $6c347e4e9f440a08$var$globalState.uncommitedRootNode = {
        // TODO: fix it
        type: $81c1b644006d48ec$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        value: element.value,
        props: element.props,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        children: element.children,
        previousCommittedRootNode: $6c347e4e9f440a08$var$globalState.currentRootNode
    };
    $6c347e4e9f440a08$var$globalState.uncommitedRootNode.parentComponent = $6c347e4e9f440a08$var$globalState.uncommitedRootNode;
    $6c347e4e9f440a08$var$componentProps = props;
    $6c347e4e9f440a08$var$componentProps.globalState = $6c347e4e9f440a08$var$globalState;
    const nextNode = $6c347e4e9f440a08$var$globalState.uncommitedRootNode;
    $6c347e4e9f440a08$var$queue.push(nextNode);
}
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$workWithDom(node) {
    if (!node || !node.parent) return;
    let domParentNode = node.parent;
    while(!domParentNode.dom)domParentNode = domParentNode.parent;
    const domParent = domParentNode.dom;
    if (node.effectTag === $81c1b644006d48ec$export$ea8d20c92e194fd2.create && node.dom) // TODO: check it
    domParent.appendChild(node.dom);
    if (node.effectTag === $81c1b644006d48ec$export$ea8d20c92e194fd2.delete) $6c347e4e9f440a08$var$commitDeletion(node, domParent);
    if (node.effectTag === $81c1b644006d48ec$export$ea8d20c92e194fd2.update) $6c347e4e9f440a08$var$updateDomNode(node);
    $6c347e4e9f440a08$var$workWithDom(node.firstChild);
    $6c347e4e9f440a08$var$workWithDom(node.sibling);
}
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$commitDeletion(node, domParent) {
    if (node.dom) domParent.removeChild(node.dom);
    else $6c347e4e9f440a08$var$commitDeletion(node.firstChild, domParent);
}
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$updateDomNode(node) {
    if (node.type === $81c1b644006d48ec$export$2ed9472effad1b70.funcNode && !node.isClassComponent) {
        const joinedProps = {
            ...node.props,
            ...$c460bbb0b55413ff$export$d74f66a29f3b4c2c(node)
        };
        const computedValue = node.value(joinedProps);
        if ((typeof computedValue === 'string' || typeof computedValue === 'number') && node.dom && 'data' in node.dom) {
            if (computedValue !== node.dom.data) {
                const newDomNode = document.createTextNode(computedValue.toString());
                node.parent.dom.replaceChild(newDomNode, node.dom);
                node.dom = newDomNode;
            }
        }
    }
    const isEvent = (key)=>key.startsWith('on')
    ;
    const isProperty = (key)=>key !== 'children'
    ;
    const isNew = (prev, next)=>(key)=>prev && next && prev[key] !== next[key] || !prev && next
    ;
    const isGone = (next)=>(key)=>next && !(key in next) || !next
    ;
    const prevProps = node.previousCommittedRootNode.props;
    const currentProps = node.props;
    if (prevProps) {
        Object.keys(prevProps).filter(isEvent).filter(isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.removeEventListener(eventType, prevProps[name]);
        });
        Object.keys(prevProps).filter(isProperty).filter(isGone(currentProps)).forEach((propName)=>node.dom[propName] = ''
        );
    }
    if (currentProps) {
        Object.keys(currentProps).filter(isProperty).filter(isNew(prevProps, currentProps)).forEach((propName)=>{
            if (typeof currentProps[propName] === 'string') node.dom[propName] = currentProps[propName];
            if (typeof currentProps[propName] === 'function') {
                const joinedProps = {
                    ...node.props,
                    ...$c460bbb0b55413ff$export$d74f66a29f3b4c2c(node)
                };
                if (node.dom) node.dom[propName] = currentProps[propName](joinedProps);
            }
        });
        Object.keys(currentProps).filter(isEvent).filter(isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.addEventListener(eventType, currentProps[name]);
        });
    }
}
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$runJobQueue(deadline) {
    let canRender = true;
    while(canRender && $6c347e4e9f440a08$var$queue.length > 0){
        $6c347e4e9f440a08$var$isWorking = true;
        const currentNode = $6c347e4e9f440a08$var$queue[0];
        $6c347e4e9f440a08$var$queue.shift();
        const nextNode = $6c347e4e9f440a08$var$applyJob(currentNode);
        if (nextNode) $6c347e4e9f440a08$var$queue.push(nextNode);
        canRender = deadline.timeRemaining() < 1;
    }
    if ($6c347e4e9f440a08$var$queue.length) requestIdleCallback($6c347e4e9f440a08$var$runJobQueue);
    else if ($6c347e4e9f440a08$var$globalState.uncommitedRootNode) {
        $6c347e4e9f440a08$var$isWorking = false;
        $6c347e4e9f440a08$var$nodesToDeleteFromDom.forEach($6c347e4e9f440a08$var$workWithDom);
        // we need add root node to DOM separately of creating DOM element
        // because it can take more time that we want
        // console.log(globalState.uncommitedRootNode.hooks);
        if ($6c347e4e9f440a08$var$globalState.uncommitedRootNode.firstChild) $6c347e4e9f440a08$var$workWithDom($6c347e4e9f440a08$var$globalState.uncommitedRootNode.firstChild);
        let mainRootNode = $6c347e4e9f440a08$var$globalState.uncommitedRootNode;
        while(mainRootNode.parent && Object.keys(mainRootNode.parent).length)mainRootNode = mainRootNode.parent;
        $6c347e4e9f440a08$var$globalState.currentRootNode = mainRootNode;
        $6c347e4e9f440a08$var$globalState.uncommitedRootNode = undefined;
    }
}
// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$applyJob(node) {
    const isClassComponent = node.value && typeof node.value === 'function' && node.value.prototype instanceof $81c1b644006d48ec$export$16fa2f45be04daa8;
    if (isClassComponent) $6c347e4e9f440a08$var$updateClassComponent(node);
    else $6c347e4e9f440a08$var$updateHostComponent(node);
    // if node has a child we should apply job to it
    if (node.firstChild) return node.firstChild;
    // else if node has a siblind we should apply job to it
    // if node doesn't have a sibling nor child do nothing
    let nextNode = node;
    while(nextNode){
        if (nextNode.sibling) return nextNode.sibling;
        // TODO: fix it
        nextNode = nextNode.parent;
    }
}
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$updateHostComponent(node) {
    if (!node.dom) node.dom = $c460bbb0b55413ff$export$34d901be6c9525f9(node);
    $6c347e4e9f440a08$var$updateChildrenNode(node, node.children);
}
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$updateClassComponent(node) {
    $6c347e4e9f440a08$var$globalState.hookIndex = 0;
    $6c347e4e9f440a08$var$globalState.wipNode = node;
    $6c347e4e9f440a08$var$globalState.wipNode.hooks = $6c347e4e9f440a08$var$globalState.wipNode.previousCommittedRootNode && $6c347e4e9f440a08$var$globalState.wipNode.previousCommittedRootNode.hooks && Array.isArray($6c347e4e9f440a08$var$globalState.wipNode.previousCommittedRootNode.hooks) ? [
        ...$6c347e4e9f440a08$var$globalState.wipNode.previousCommittedRootNode.hooks
    ] : [];
    node.props = {
        ...node.props,
        globalState: $6c347e4e9f440a08$var$globalState
    };
    const component = new node.value(node.props);
    node.children = node.children.length ? node.children : [
        component.render()
    ];
    node.isClassComponent = true;
    node.parentComponent = node;
    $6c347e4e9f440a08$var$updateChildrenNode(node, node.children);
}
// eslint-disable-next-line require-jsdoc
function $6c347e4e9f440a08$var$updateChildrenNode(node, children) {
    let index = 0;
    let prevSibling;
    let committedNode = node.previousCommittedRootNode?.firstChild ?? undefined;
    while(index < children.length || committedNode){
        let childNode = children[index];
        if (committedNode && committedNode.type === childNode.type) {
            // update node props
            childNode = {
                type: childNode.type,
                effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.update,
                props: childNode.props,
                children: childNode.children,
                firstChild: childNode.firstChild,
                sibling: childNode.sibling,
                value: childNode.value,
                dom: committedNode.dom,
                previousCommittedRootNode: committedNode,
                parent: node,
                isClassComponent: childNode.isClassComponent,
                hooks: childNode.hooks
            };
            childNode.parentComponent = childNode.parent && childNode.parent.isClassComponent ? childNode.parent : childNode.parent ? childNode.parent.parentComponent : childNode;
        }
        if (committedNode && committedNode.type !== childNode.type) {
            // delete old node and add new node
            committedNode.effectTag = $81c1b644006d48ec$export$ea8d20c92e194fd2.delete;
            $6c347e4e9f440a08$var$nodesToDeleteFromDom.push(committedNode);
            // TODO: check it
            childNode = {
                type: childNode.type,
                effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
                isClassComponent: childNode.isClassComponent,
                firstChild: childNode.firstChild,
                sibling: childNode.sibling,
                hooks: childNode.hooks
            };
            childNode.parentComponent = childNode.parent && childNode.parent.isClassComponent ? childNode.parent : childNode.parent ? childNode.parent.parentComponent : childNode;
        }
        if (!committedNode && childNode) {
            // add new node
            childNode = {
                type: childNode.type,
                effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
                hooks: childNode.hooks,
                isClassComponent: childNode.isClassComponent
            };
            childNode.parentComponent = childNode.parent && childNode.parent.isClassComponent ? childNode.parent : childNode.parent ? childNode.parent.parentComponent : childNode;
        }
        if (committedNode) committedNode = committedNode.sibling;
        if (childNode.type) {
            if (prevSibling) prevSibling.sibling = childNode;
            else node.firstChild = childNode;
        }
        prevSibling = childNode;
        children[index] = childNode;
        index++;
    }
}
function $6c347e4e9f440a08$export$2cd8252107eb640b(element, containerSelector, props) {
    const domContainer = document.querySelector(containerSelector);
    if (domContainer) {
        $6c347e4e9f440a08$var$render(element, domContainer, props);
        requestIdleCallback($6c347e4e9f440a08$var$runJobQueue);
    } else throw new Error(`Can't find element with selector ${containerSelector}`);
}



var $985cf33fc5593742$exports = {};

$parcel$defineInteropFlag($985cf33fc5593742$exports);

$parcel$export($985cf33fc5593742$exports, "default", () => $985cf33fc5593742$export$2e2bcd8739ae039);
$parcel$export($985cf33fc5593742$exports, "parseTemplate", () => $985cf33fc5593742$export$2e2dbd43b49fd373);

function $985cf33fc5593742$export$2e2bcd8739ae039(template, lastOpenedTagName = '', imports) {
    const openingTag = /^\n*?[ \t]*?<(\w+)/;
    const endOpeningTag = />/;
    const node = {
        type: 'element',
        name: '',
        length: 0,
        value: '',
        props: {},
        children: []
    };
    let match = template.match(openingTag);
    const closingTag = new RegExp(`[ \t]*?</${lastOpenedTagName}>`);
    if (!match) {
        // if no opening tag we should find closing tag
        // and between them parse value
        match = template.match(closingTag);
        if (!match) throw new Error('parsing error: no closing tag');
        const nodeValue = $985cf33fc5593742$var$parseValue(template.slice(0, match.index).trim());
        if (nodeValue.length === 0) node.value = '';
        else {
            for (const childNodeContent of nodeValue)if (typeof childNodeContent === 'string') node.children.push({
                type: 'textValue',
                name: '',
                value: childNodeContent,
                props: {},
                length: childNodeContent.length,
                children: []
            });
            else node.children.push({
                type: 'funcValue',
                name: '',
                value: childNodeContent,
                props: {},
                length: NaN,
                children: []
            });
        }
        node.length = match.index + match[0].length;
        node.type = 'element';
        node.isClosing = true;
        return node;
    }
    let nodeLength = match.index + match[0].length;
    node.name = match[1];
    template = template.slice(match.index + match[0].length);
    // find the end of opened tag
    match = template.match(endOpeningTag);
    if (!match) throw new Error('parsing error: no end of opening tag');
    let templateCopy = template;
    let cuttedSymbols = 0;
    // check if we found '=>' in arrow function
    while(match && templateCopy[match.index - 1] === '='){
        templateCopy = templateCopy.slice(match.index + 1);
        cuttedSymbols += match.index + 1;
        match = templateCopy.match(endOpeningTag);
    }
    if (!match) throw new Error('parsing error: no end of opening tag');
    nodeLength += match.index + match[0].length + cuttedSymbols;
    const propsStr = template.slice(0, match.index + cuttedSymbols);
    node.props = $985cf33fc5593742$var$parseProps(propsStr);
    // if self-closing tag
    if (template.slice(match.index + cuttedSymbols - 1, match.index + cuttedSymbols + 1) === '/>') {
        node.type = 'self-closing';
        if (imports && node.name in imports) {
            node.value = imports[node.name];
            node.type = 'component';
        }
        node.isClosing = true;
        node.length = nodeLength;
        return node;
    }
    // nodeLength += propsStr.length
    template = template.slice(match.index + cuttedSymbols + 1);
    let childNode = $985cf33fc5593742$export$2e2bcd8739ae039(template, node.name, imports);
    while(!childNode.isClosing){
        template = template.slice(childNode.length);
        node.children.push(childNode);
        nodeLength += childNode.length;
        childNode = $985cf33fc5593742$export$2e2bcd8739ae039(template, node.name, imports);
    }
    nodeLength += childNode.length;
    if (childNode.value.length) node.children.push(childNode);
    else if (childNode.children.length) node.children.push(...childNode.children);
    node.length = nodeLength;
    return node;
}
// TODO: write it
// (string | FiberNode)[]
// eslint-disable-next-line require-jsdoc
function $985cf33fc5593742$var$parseValue(str) {
    const curlyBracets = /{[^}]*}/;
    let match = str.match(curlyBracets);
    const children = [];
    while(match){
        const prevTextNode = str.slice(0, match.index);
        if (prevTextNode.length) children.push(prevTextNode);
        const funcNodeStr = str.slice(match.index + 1, match.index + match[0].length - 1).trim();
        const funcNode = $985cf33fc5593742$var$createFuncValue(funcNodeStr);
        children.push(funcNode);
        str = str.slice(match.index + match[0].length);
        match = str.match(curlyBracets);
    }
    if (str.length) children.push(str);
    return children;
}
// eslint-disable-next-line require-jsdoc
function $985cf33fc5593742$var$parseProps(str) {
    const props = {};
    // regex to get attributes from tag
    const matchNextProp = ()=>str.match(/ *\w+=\".+?(?=")"/) || str.match(/ *\w+/)
    ;
    let match = matchNextProp();
    if (!match) return props;
    while(match){
        const propStr = match[0];
        let [propKey, ...propValues] = propStr.split('=');
        propKey = propKey.trim();
        let propValue = propValues.join('=');
        propValue = typeof propValue === 'string' && propValue.length ? propValue.slice(1, -1) : true;
        const curlyBracets = /{.*}/;
        if (typeof propValue === 'string') {
            const bracetsMatch = propValue.match(curlyBracets);
            if (bracetsMatch) propValue = $985cf33fc5593742$var$createFuncValue(bracetsMatch[0].slice(1, -1));
        }
        props[propKey] = propValue;
        str = str.slice(0, match.index) + str.slice(match.index + propStr.length);
        match = matchNextProp();
    }
    return props;
}
// eslint-disable-next-line require-jsdoc
function $985cf33fc5593742$var$createFuncValue(str) {
    return new Function('props', `return ${str}`);
}
// eslint-disable-next-line require-jsdoc
function $985cf33fc5593742$var$convertTagNodeToFiberNode(tagNode) {
    // if tag node has a value it means that node is component
    let componentConstructor;
    if (tagNode.type === 'component' && tagNode.value) componentConstructor = tagNode.value;
    const convertedNode = {
        type: tagNode.name,
        props: tagNode.props,
        value: componentConstructor,
        children: tagNode.children.map((node)=>[
                'funcValue',
                'textValue'
            ].includes(node.type) ? node.value : node.type === 'component' ? {
                compConstructor: node.value,
                props: node.props
            } : $985cf33fc5593742$var$convertTagNodeToFiberNode(node)
        )
    };
    return $c460bbb0b55413ff$export$270e7ba5936d3c48(convertedNode.type, convertedNode.props, componentConstructor, ...convertedNode.children);
}
function $985cf33fc5593742$export$2e2dbd43b49fd373(template, imports) {
    const rootNode = $985cf33fc5593742$export$2e2bcd8739ae039(template, '', imports);
    const rootFiberNode = $985cf33fc5593742$var$convertTagNodeToFiberNode(rootNode);
    return rootFiberNode;
} // const templateStr = `
 // <div><App props="{props}" /></div>
 // `
 // console.log(
 //     parseTemplate(templateStr, {
 //         App: AppComponent,
 //     }).children[0].value
 // )


var $5d6c00540a01c38e$exports = {};

$parcel$export($5d6c00540a01c38e$exports, "useState", () => $5d6c00540a01c38e$export$60241385465d0a34);
function $5d6c00540a01c38e$export$60241385465d0a34(initial, globalState) {
    const actionsQueue = [];
    const oldHook = globalState.wipNode.previousCommittedRootNode && globalState.wipNode.previousCommittedRootNode.hooks && globalState.wipNode.previousCommittedRootNode.hooks[globalState.hookIndex];
    const hook = {
        state: oldHook ? oldHook.state : initial,
        queue: actionsQueue
    };
    const actions = oldHook ? oldHook.queue : [];
    actions.forEach((action)=>{
        hook.state = action(hook.state);
    });
    const setState = (action)=>{
        hook.queue.push(action);
        globalState.uncommitedRootNode = {
            type: globalState.wipNode.type,
            children: globalState.wipNode.children,
            dom: globalState.wipNode.dom,
            props: globalState.wipNode.props,
            value: globalState.wipNode.value,
            previousCommittedRootNode: globalState.wipNode,
            parent: globalState.wipNode.parent,
            firstChild: globalState.wipNode.firstChild,
            parentComponent: globalState.wipNode.parentComponent
        };
        globalState.addNodeToQueue(globalState.uncommitedRootNode);
        globalState.nodesToDeleteFromDom = [];
    };
    globalState.wipNode.hooks.push(hook);
    globalState.hookIndex++;
    return [
        hook.state,
        setState
    ];
}




export {$c460bbb0b55413ff$export$b2ce9ad90858ed7a as createTextNode, $c460bbb0b55413ff$export$799c61d34e780353 as createFuncNode, $c460bbb0b55413ff$export$fefd1e69396ee10d as createComponentNode, $c460bbb0b55413ff$export$270e7ba5936d3c48 as createNode, $c460bbb0b55413ff$export$34d901be6c9525f9 as createDomNode, $c460bbb0b55413ff$export$d74f66a29f3b4c2c as getParentClassComponentProps, $81c1b644006d48ec$export$2ed9472effad1b70 as NodeTypes, $81c1b644006d48ec$export$ea8d20c92e194fd2 as EffectTags, $81c1b644006d48ec$export$16fa2f45be04daa8 as Component, $985cf33fc5593742$export$2e2dbd43b49fd373 as parseTemplate, $6c347e4e9f440a08$export$2cd8252107eb640b as init, $5d6c00540a01c38e$export$60241385465d0a34 as useState};
//# sourceMappingURL=module.js.map

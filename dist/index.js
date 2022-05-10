function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
var $020871d0a4577cb7$exports = {};

$parcel$export($020871d0a4577cb7$exports, "createTextNode", () => $020871d0a4577cb7$export$b2ce9ad90858ed7a);
$parcel$export($020871d0a4577cb7$exports, "createFuncNode", () => $020871d0a4577cb7$export$799c61d34e780353);
$parcel$export($020871d0a4577cb7$exports, "createComponentNode", () => $020871d0a4577cb7$export$fefd1e69396ee10d);
$parcel$export($020871d0a4577cb7$exports, "createNode", () => $020871d0a4577cb7$export$270e7ba5936d3c48);
$parcel$export($020871d0a4577cb7$exports, "createDomNode", () => $020871d0a4577cb7$export$34d901be6c9525f9);
$parcel$export($020871d0a4577cb7$exports, "getParentClassComponentProps", () => $020871d0a4577cb7$export$d74f66a29f3b4c2c);
var $faefaad95e5fcca0$exports = {};

$parcel$export($faefaad95e5fcca0$exports, "NodeTypes", () => $faefaad95e5fcca0$export$2ed9472effad1b70);
$parcel$export($faefaad95e5fcca0$exports, "EffectTags", () => $faefaad95e5fcca0$export$ea8d20c92e194fd2);
$parcel$export($faefaad95e5fcca0$exports, "Component", () => $faefaad95e5fcca0$export$16fa2f45be04daa8);
let $faefaad95e5fcca0$export$2ed9472effad1b70;
(function($faefaad95e5fcca0$export$2ed9472effad1b70) {
    $faefaad95e5fcca0$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "textNode"] = 'TEXT_NODE';
    $faefaad95e5fcca0$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "unitOfWork"] = 'UNIT_OF_WORK';
    $faefaad95e5fcca0$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "funcNode"] = 'FUNC_NODE';
    $faefaad95e5fcca0$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "compNode"] = 'COMP_NODE';
})($faefaad95e5fcca0$export$2ed9472effad1b70 || ($faefaad95e5fcca0$export$2ed9472effad1b70 = {}));
let $faefaad95e5fcca0$export$ea8d20c92e194fd2;
(function($faefaad95e5fcca0$export$ea8d20c92e194fd2) {
    $faefaad95e5fcca0$export$ea8d20c92e194fd2[// eslint-disable-next-line no-unused-vars
    "update"] = 'UPDATE';
    $faefaad95e5fcca0$export$ea8d20c92e194fd2[// eslint-disable-next-line no-unused-vars
    "delete"] = 'DELETE';
    $faefaad95e5fcca0$export$ea8d20c92e194fd2[// eslint-disable-next-line no-unused-vars
    "create"] = 'CREATE';
})($faefaad95e5fcca0$export$ea8d20c92e194fd2 || ($faefaad95e5fcca0$export$ea8d20c92e194fd2 = {}));
class $faefaad95e5fcca0$export$16fa2f45be04daa8 {
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


function $020871d0a4577cb7$export$b2ce9ad90858ed7a(text) {
    const textNode = {
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.textNode,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        value: text,
        children: []
    };
    return textNode;
}
function $020871d0a4577cb7$export$799c61d34e780353(func) {
    const functNode = {
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.funcNode,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        value: func,
        children: []
    };
    return functNode;
}
function $020871d0a4577cb7$export$fefd1e69396ee10d(node) {
    const functNode = {
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.compNode,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        value: node.compConstructor,
        props: node.props,
        children: []
    };
    return functNode;
}
function $020871d0a4577cb7$export$270e7ba5936d3c48(type, props, componentConstructor, ...children) {
    const node = {
        type: type,
        props: props,
        value: componentConstructor,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: children.map((el)=>{
            if (typeof el === 'string') return $020871d0a4577cb7$export$b2ce9ad90858ed7a(el);
            else if (typeof el === 'function') return $020871d0a4577cb7$export$799c61d34e780353(el);
            else if (typeof el === 'object' && 'compConstructor' in el) return $020871d0a4577cb7$export$fefd1e69396ee10d(el);
            else return el;
        })
    };
    return node;
}
function $020871d0a4577cb7$export$34d901be6c9525f9(node) {
    const joinedProps = {
        ...node.props,
        ...$020871d0a4577cb7$export$d74f66a29f3b4c2c(node)
    };
    if (node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.textNode && node.value) {
        const textDomNode = document.createTextNode(node.value);
        return textDomNode;
    }
    if ((node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.funcNode || node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.compNode) && node.value) {
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
function $020871d0a4577cb7$export$d74f66a29f3b4c2c(node) {
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


var $d56f0a173836b9ee$exports = {};

$parcel$export($d56f0a173836b9ee$exports, "init", () => $d56f0a173836b9ee$export$2cd8252107eb640b);


const $d56f0a173836b9ee$var$queue = [];
const $d56f0a173836b9ee$var$nodesToDeleteFromDom = [];
let $d56f0a173836b9ee$var$componentProps = {};
let $d56f0a173836b9ee$var$isWorking = false;
const $d56f0a173836b9ee$var$globalState = {
    nodesToDeleteFromDom: $d56f0a173836b9ee$var$nodesToDeleteFromDom,
    uncommitedRootNode: undefined,
    currentRootNode: undefined,
    wipNode: undefined,
    hookIndex: 0,
    addNodeToQueue: (node)=>{
        $d56f0a173836b9ee$var$queue.push(node);
        console.log('called');
        if (!$d56f0a173836b9ee$var$isWorking) requestIdleCallback($d56f0a173836b9ee$var$runJobQueue);
    }
};
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$render(element, container, props) {
    if (element.value && typeof element.value === 'function' && element.value.prototype instanceof $faefaad95e5fcca0$export$16fa2f45be04daa8) $d56f0a173836b9ee$var$globalState.uncommitedRootNode = {
        // TODO: fix it
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: [
            {
                type: element.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
                children: element.children,
                value: element.value,
                props: element.props,
                isClassComponent: true
            }, 
        ],
        previousCommittedRootNode: $d56f0a173836b9ee$var$globalState.currentRootNode
    };
    else $d56f0a173836b9ee$var$globalState.uncommitedRootNode = {
        // TODO: fix it
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        value: element.value,
        props: element.props,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: element.children,
        previousCommittedRootNode: $d56f0a173836b9ee$var$globalState.currentRootNode
    };
    $d56f0a173836b9ee$var$globalState.uncommitedRootNode.parentComponent = $d56f0a173836b9ee$var$globalState.uncommitedRootNode;
    $d56f0a173836b9ee$var$componentProps = props;
    $d56f0a173836b9ee$var$componentProps.globalState = $d56f0a173836b9ee$var$globalState;
    const nextNode = $d56f0a173836b9ee$var$globalState.uncommitedRootNode;
    $d56f0a173836b9ee$var$queue.push(nextNode);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$workWithDom(node) {
    if (!node || !node.parent) return;
    let domParentNode = node.parent;
    while(!domParentNode.dom)domParentNode = domParentNode.parent;
    const domParent = domParentNode.dom;
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.create && node.dom) // TODO: check it
    domParent.appendChild(node.dom);
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.delete) $d56f0a173836b9ee$var$commitDeletion(node, domParent);
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.update) $d56f0a173836b9ee$var$updateDomNode(node);
    $d56f0a173836b9ee$var$workWithDom(node.firstChild);
    $d56f0a173836b9ee$var$workWithDom(node.sibling);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$commitDeletion(node, domParent) {
    if (node.dom) domParent.removeChild(node.dom);
    else $d56f0a173836b9ee$var$commitDeletion(node.firstChild, domParent);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$updateDomNode(node) {
    if (node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.funcNode && !node.isClassComponent) {
        const joinedProps = {
            ...node.props,
            ...$020871d0a4577cb7$export$d74f66a29f3b4c2c(node)
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
                    ...$020871d0a4577cb7$export$d74f66a29f3b4c2c(node)
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
function $d56f0a173836b9ee$var$runJobQueue(deadline) {
    let canRender = true;
    while(canRender && $d56f0a173836b9ee$var$queue.length > 0){
        $d56f0a173836b9ee$var$isWorking = true;
        const currentNode = $d56f0a173836b9ee$var$queue[0];
        $d56f0a173836b9ee$var$queue.shift();
        const nextNode = $d56f0a173836b9ee$var$applyJob(currentNode);
        if (nextNode) $d56f0a173836b9ee$var$queue.push(nextNode);
        canRender = deadline.timeRemaining() < 1;
    }
    if ($d56f0a173836b9ee$var$queue.length) requestIdleCallback($d56f0a173836b9ee$var$runJobQueue);
    else if ($d56f0a173836b9ee$var$globalState.uncommitedRootNode) {
        $d56f0a173836b9ee$var$isWorking = false;
        $d56f0a173836b9ee$var$nodesToDeleteFromDom.forEach($d56f0a173836b9ee$var$workWithDom);
        // we need add root node to DOM separately of creating DOM element
        // because it can take more time that we want
        // console.log(globalState.uncommitedRootNode.hooks);
        if ($d56f0a173836b9ee$var$globalState.uncommitedRootNode.firstChild) $d56f0a173836b9ee$var$workWithDom($d56f0a173836b9ee$var$globalState.uncommitedRootNode.firstChild);
        let mainRootNode = $d56f0a173836b9ee$var$globalState.uncommitedRootNode;
        while(mainRootNode.parent && Object.keys(mainRootNode.parent).length)mainRootNode = mainRootNode.parent;
        $d56f0a173836b9ee$var$globalState.currentRootNode = mainRootNode;
        $d56f0a173836b9ee$var$globalState.uncommitedRootNode = undefined;
    }
}
// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$applyJob(node) {
    const isClassComponent = node.value && typeof node.value === 'function' && node.value.prototype instanceof $faefaad95e5fcca0$export$16fa2f45be04daa8;
    if (isClassComponent) $d56f0a173836b9ee$var$updateClassComponent(node);
    else $d56f0a173836b9ee$var$updateHostComponent(node);
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
function $d56f0a173836b9ee$var$updateHostComponent(node) {
    if (!node.dom) node.dom = $020871d0a4577cb7$export$34d901be6c9525f9(node);
    $d56f0a173836b9ee$var$updateChildrenNode(node, node.children);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$updateClassComponent(node) {
    $d56f0a173836b9ee$var$globalState.hookIndex = 0;
    $d56f0a173836b9ee$var$globalState.wipNode = node;
    $d56f0a173836b9ee$var$globalState.wipNode.hooks = $d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode && $d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode.hooks && Array.isArray($d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode.hooks) ? [
        ...$d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode.hooks
    ] : [];
    node.props = {
        ...node.props,
        globalState: $d56f0a173836b9ee$var$globalState
    };
    const component = new node.value(node.props);
    node.children = node.children.length ? node.children : [
        component.render()
    ];
    node.isClassComponent = true;
    node.parentComponent = node;
    $d56f0a173836b9ee$var$updateChildrenNode(node, node.children);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$updateChildrenNode(node, children) {
    let index = 0;
    let prevSibling;
    let committedNode = node.previousCommittedRootNode?.firstChild ?? undefined;
    while(index < children.length || committedNode){
        let childNode = children[index];
        if (committedNode && committedNode.type === childNode.type) {
            // update node props
            childNode = {
                type: childNode.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.update,
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
            committedNode.effectTag = $faefaad95e5fcca0$export$ea8d20c92e194fd2.delete;
            $d56f0a173836b9ee$var$nodesToDeleteFromDom.push(committedNode);
            // TODO: check it
            childNode = {
                type: childNode.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
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
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
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
function $d56f0a173836b9ee$export$2cd8252107eb640b(element, containerSelector, props) {
    const domContainer = document.querySelector(containerSelector);
    if (domContainer) {
        $d56f0a173836b9ee$var$render(element, domContainer, props);
        requestIdleCallback($d56f0a173836b9ee$var$runJobQueue);
    } else throw new Error(`Can't find element with selector ${containerSelector}`);
}



var $f9ed6fea0cb0dd94$exports = {};

$parcel$defineInteropFlag($f9ed6fea0cb0dd94$exports);

$parcel$export($f9ed6fea0cb0dd94$exports, "default", () => $f9ed6fea0cb0dd94$export$2e2bcd8739ae039);
$parcel$export($f9ed6fea0cb0dd94$exports, "parseTemplate", () => $f9ed6fea0cb0dd94$export$2e2dbd43b49fd373);

function $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, lastOpenedTagName = '', imports) {
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
        const nodeValue = $f9ed6fea0cb0dd94$var$parseValue(template.slice(0, match.index).trim());
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
    node.props = $f9ed6fea0cb0dd94$var$parseProps(propsStr);
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
    let childNode = $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, node.name, imports);
    while(!childNode.isClosing){
        template = template.slice(childNode.length);
        node.children.push(childNode);
        nodeLength += childNode.length;
        childNode = $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, node.name, imports);
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
function $f9ed6fea0cb0dd94$var$parseValue(str) {
    const curlyBracets = /{[^}]*}/;
    let match = str.match(curlyBracets);
    const children = [];
    while(match){
        const prevTextNode = str.slice(0, match.index);
        if (prevTextNode.length) children.push(prevTextNode);
        const funcNodeStr = str.slice(match.index + 1, match.index + match[0].length - 1).trim();
        const funcNode = $f9ed6fea0cb0dd94$var$createFuncValue(funcNodeStr);
        children.push(funcNode);
        str = str.slice(match.index + match[0].length);
        match = str.match(curlyBracets);
    }
    if (str.length) children.push(str);
    return children;
}
// eslint-disable-next-line require-jsdoc
function $f9ed6fea0cb0dd94$var$parseProps(str) {
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
            if (bracetsMatch) propValue = $f9ed6fea0cb0dd94$var$createFuncValue(bracetsMatch[0].slice(1, -1));
        }
        props[propKey] = propValue;
        str = str.slice(0, match.index) + str.slice(match.index + propStr.length);
        match = matchNextProp();
    }
    return props;
}
// eslint-disable-next-line require-jsdoc
function $f9ed6fea0cb0dd94$var$createFuncValue(str) {
    return new Function('props', `return ${str}`);
}
// eslint-disable-next-line require-jsdoc
function $f9ed6fea0cb0dd94$var$convertTagNodeToFiberNode(tagNode) {
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
            } : $f9ed6fea0cb0dd94$var$convertTagNodeToFiberNode(node)
        )
    };
    return $020871d0a4577cb7$export$270e7ba5936d3c48(convertedNode.type, convertedNode.props, componentConstructor, ...convertedNode.children);
}
function $f9ed6fea0cb0dd94$export$2e2dbd43b49fd373(template, imports) {
    const rootNode = $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, '', imports);
    const rootFiberNode = $f9ed6fea0cb0dd94$var$convertTagNodeToFiberNode(rootNode);
    return rootFiberNode;
} // const templateStr = `
 // <div><App props="{props}" /></div>
 // `
 // console.log(
 //     parseTemplate(templateStr, {
 //         App: AppComponent,
 //     }).children[0].value
 // )


var $87479787429c10bb$exports = {};

$parcel$export($87479787429c10bb$exports, "useState", () => $87479787429c10bb$export$60241385465d0a34);
function $87479787429c10bb$export$60241385465d0a34(initial, globalState) {
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


$parcel$exportWildcard(module.exports, $020871d0a4577cb7$exports);
$parcel$exportWildcard(module.exports, $faefaad95e5fcca0$exports);
$parcel$exportWildcard(module.exports, $f9ed6fea0cb0dd94$exports);
$parcel$exportWildcard(module.exports, $d56f0a173836b9ee$exports);
$parcel$exportWildcard(module.exports, $87479787429c10bb$exports);


//# sourceMappingURL=index.js.map

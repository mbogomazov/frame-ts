function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c460bbb0b55413ff$exports = {};

$parcel$export($c460bbb0b55413ff$exports, "createTextNode", () => $c460bbb0b55413ff$export$b2ce9ad90858ed7a);
$parcel$export($c460bbb0b55413ff$exports, "createNode", () => $c460bbb0b55413ff$export$270e7ba5936d3c48);
$parcel$export($c460bbb0b55413ff$exports, "createDomNode", () => $c460bbb0b55413ff$export$34d901be6c9525f9);
var $81c1b644006d48ec$exports = {};

$parcel$export($81c1b644006d48ec$exports, "NodeTypes", () => $81c1b644006d48ec$export$2ed9472effad1b70);
$parcel$export($81c1b644006d48ec$exports, "EffectTags", () => $81c1b644006d48ec$export$ea8d20c92e194fd2);
let $81c1b644006d48ec$export$2ed9472effad1b70;
(function($81c1b644006d48ec$export$2ed9472effad1b70) {
    $81c1b644006d48ec$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "textNode"] = 'TEXT_NODE';
    $81c1b644006d48ec$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "unitOfWork"] = 'UNIT_OF_WORK';
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


function $c460bbb0b55413ff$export$b2ce9ad90858ed7a(text) {
    const textNode = {
        type: $81c1b644006d48ec$export$2ed9472effad1b70.textNode,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        textValue: text,
        children: []
    };
    return textNode;
}
function $c460bbb0b55413ff$export$270e7ba5936d3c48(type, props, ...children) {
    const node = {
        type: type,
        props: props,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        children: children.map((el)=>typeof el === 'string' ? $c460bbb0b55413ff$export$b2ce9ad90858ed7a(el) : el
        )
    };
    return node;
}
function $c460bbb0b55413ff$export$34d901be6c9525f9(node) {
    if (node.type === $81c1b644006d48ec$export$2ed9472effad1b70.textNode && node.textValue) {
        const textDomNode = document.createTextNode(node.textValue);
        return textDomNode;
    }
    const domNode = document.createElement(node.type);
    if (node.props) Object.entries(node.props).map(([propName, propValue])=>{
        domNode[propName] = propValue;
    });
    return domNode;
}


var $b013a5dd6d18443e$exports = {};

$parcel$export($b013a5dd6d18443e$exports, "init", () => $b013a5dd6d18443e$export$2cd8252107eb640b);


const $b013a5dd6d18443e$var$queue = [];
const $b013a5dd6d18443e$var$nodesToDeleteFromDom = [];
let $b013a5dd6d18443e$var$uncommitedRootNode = undefined;
let $b013a5dd6d18443e$var$currentRootNode = undefined;
// let counter = false
// eslint-disable-next-line require-jsdoc
function $b013a5dd6d18443e$var$appendNodeToQueue(element, container) {
    $b013a5dd6d18443e$var$uncommitedRootNode = {
        // TODO: fix it
        type: $81c1b644006d48ec$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
        children: element.children,
        previousCommittedRootNode: $b013a5dd6d18443e$var$currentRootNode
    };
    const nextNode = $b013a5dd6d18443e$var$uncommitedRootNode;
    $b013a5dd6d18443e$var$queue.push(nextNode);
}
// eslint-disable-next-line require-jsdoc
function $b013a5dd6d18443e$var$workWithDom(node) {
    if (!node || !node.parent) return;
    if (node.effectTag === $81c1b644006d48ec$export$ea8d20c92e194fd2.create && node.dom) // TODO: check it
    node.parent.dom.appendChild(node.dom);
    if (node.effectTag === $81c1b644006d48ec$export$ea8d20c92e194fd2.delete) node.parent.dom.removeChild(node.dom);
    if (node.effectTag === $81c1b644006d48ec$export$ea8d20c92e194fd2.update) $b013a5dd6d18443e$var$updateDomNode(node);
    $b013a5dd6d18443e$var$workWithDom(node.children[0]);
    $b013a5dd6d18443e$var$workWithDom(node.sibling);
}
const $b013a5dd6d18443e$var$isEvent = (key)=>key.startsWith('on')
;
const $b013a5dd6d18443e$var$isProperty = (key)=>key !== 'children'
;
const $b013a5dd6d18443e$var$isNew = (prev, next)=>(key)=>prev && next && prev[key] !== next[key] || !prev && next
;
const $b013a5dd6d18443e$var$isGone = (next)=>(key)=>next && !(key in next) || !next
;
// eslint-disable-next-line require-jsdoc
function $b013a5dd6d18443e$var$updateDomNode(node) {
    const prevProps = node.previousCommittedRootNode.props;
    const currentProps = node.props;
    if (prevProps) {
        Object.keys(prevProps).filter($b013a5dd6d18443e$var$isEvent).filter($b013a5dd6d18443e$var$isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.removeEventListener(eventType, prevProps[name]);
        });
        Object.keys(prevProps).filter($b013a5dd6d18443e$var$isProperty).filter($b013a5dd6d18443e$var$isGone(currentProps)).forEach((propName)=>node.dom[propName] = ''
        );
    }
    if (currentProps) {
        Object.keys(currentProps).filter($b013a5dd6d18443e$var$isProperty).filter($b013a5dd6d18443e$var$isNew(prevProps, currentProps)).forEach((propName)=>node.dom[propName] = currentProps[propName]
        );
        Object.keys(currentProps).filter($b013a5dd6d18443e$var$isEvent).filter($b013a5dd6d18443e$var$isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.addEventListener(eventType, currentProps[name]);
        });
    }
}
// eslint-disable-next-line require-jsdoc
function $b013a5dd6d18443e$var$runJobQueue(deadline) {
    console.log('run');
    let canRender = true;
    while(canRender && $b013a5dd6d18443e$var$queue.length){
        const currentNode = $b013a5dd6d18443e$var$queue[0];
        $b013a5dd6d18443e$var$queue.shift();
        const nextNode = $b013a5dd6d18443e$var$applyJob(currentNode);
        if (nextNode) $b013a5dd6d18443e$var$queue.push(nextNode);
        canRender = deadline.timeRemaining() < 1;
    }
    if ($b013a5dd6d18443e$var$queue.length) requestIdleCallback($b013a5dd6d18443e$var$runJobQueue);
    else if ($b013a5dd6d18443e$var$uncommitedRootNode) {
        // we need add root node to DOM separately of creating DOM element
        // because it can take more time that we want
        $b013a5dd6d18443e$var$nodesToDeleteFromDom.forEach($b013a5dd6d18443e$var$workWithDom);
        if ($b013a5dd6d18443e$var$uncommitedRootNode.children.length) $b013a5dd6d18443e$var$workWithDom($b013a5dd6d18443e$var$uncommitedRootNode.children[0]);
        $b013a5dd6d18443e$var$currentRootNode = $b013a5dd6d18443e$var$uncommitedRootNode;
        $b013a5dd6d18443e$var$uncommitedRootNode = undefined;
    }
}
// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function $b013a5dd6d18443e$var$applyJob(node) {
    if (!node.dom) node.dom = $c460bbb0b55413ff$export$34d901be6c9525f9(node);
    $b013a5dd6d18443e$var$updateChildrenNode(node);
    if (node.children.length) return node.children[0];
    let nextNode = node;
    while(nextNode){
        if (nextNode.sibling) return nextNode.sibling;
        // TODO: fix it
        nextNode = nextNode.parent;
    }
}
// eslint-disable-next-line require-jsdoc
function $b013a5dd6d18443e$var$updateChildrenNode(node) {
    const children = node.children;
    let index = 0;
    let prevSibling;
    let committedNode = node.previousCommittedRootNode?.children[0] ?? undefined;
    while(index < children.length || committedNode){
        // const newNode: FiberNode = {
        //     type: children[index].type,
        //     props: children[index].props,
        //     children: children[index].children,
        //     parent: node,
        //     textValue: children[index].textValue ?? undefined,
        // }
        let newNode;
        const childNode = children[index];
        if (committedNode && committedNode.type === childNode.type) newNode = {
            type: childNode.type,
            effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.update,
            props: childNode.props,
            children: childNode.children,
            textValue: childNode.textValue,
            dom: committedNode.dom,
            previousCommittedRootNode: childNode.previousCommittedRootNode,
            parent: node
        };
        if (committedNode && committedNode.type !== childNode.type) {
            // delete old node and add new node
            committedNode.effectTag = $81c1b644006d48ec$export$ea8d20c92e194fd2.delete;
            $b013a5dd6d18443e$var$nodesToDeleteFromDom.push(committedNode);
            // TODO: check it
            newNode = {
                type: childNode.type,
                effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
                props: childNode.props,
                children: childNode.children,
                textValue: childNode.textValue,
                parent: node
            };
        }
        if (!committedNode && childNode) // add new node
        newNode = {
            type: childNode.type,
            effectTag: $81c1b644006d48ec$export$ea8d20c92e194fd2.create,
            props: childNode.props,
            children: childNode.children,
            textValue: childNode.textValue,
            parent: node
        };
        if (committedNode) committedNode = committedNode.sibling;
        if (childNode.type) {
            if (prevSibling) prevSibling.sibling = newNode;
            else node.children = [
                newNode
            ];
        }
        prevSibling = newNode;
        index++;
    }
}
function $b013a5dd6d18443e$export$2cd8252107eb640b(element, containerSelector) {
    const domContainer = document.querySelector(containerSelector);
    if (domContainer) {
        $b013a5dd6d18443e$var$appendNodeToQueue(element, domContainer);
        requestIdleCallback($b013a5dd6d18443e$var$runJobQueue);
    } else throw new Error(`Can't find element with selector ${containerSelector}`);
}





export {$c460bbb0b55413ff$export$b2ce9ad90858ed7a as createTextNode, $c460bbb0b55413ff$export$270e7ba5936d3c48 as createNode, $c460bbb0b55413ff$export$34d901be6c9525f9 as createDomNode, $b013a5dd6d18443e$export$2cd8252107eb640b as init, $81c1b644006d48ec$export$2ed9472effad1b70 as NodeTypes, $81c1b644006d48ec$export$ea8d20c92e194fd2 as EffectTags};
//# sourceMappingURL=module.js.map

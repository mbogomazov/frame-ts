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
var $020871d0a4577cb7$exports = {};

$parcel$export($020871d0a4577cb7$exports, "createTextNode", () => $020871d0a4577cb7$export$b2ce9ad90858ed7a);
$parcel$export($020871d0a4577cb7$exports, "createNode", () => $020871d0a4577cb7$export$270e7ba5936d3c48);
$parcel$export($020871d0a4577cb7$exports, "createDomNode", () => $020871d0a4577cb7$export$34d901be6c9525f9);
var $faefaad95e5fcca0$exports = {};

$parcel$export($faefaad95e5fcca0$exports, "NodeTypes", () => $faefaad95e5fcca0$export$2ed9472effad1b70);
$parcel$export($faefaad95e5fcca0$exports, "EffectTags", () => $faefaad95e5fcca0$export$ea8d20c92e194fd2);
let $faefaad95e5fcca0$export$2ed9472effad1b70;
(function($faefaad95e5fcca0$export$2ed9472effad1b70) {
    $faefaad95e5fcca0$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "textNode"] = 'TEXT_NODE';
    $faefaad95e5fcca0$export$2ed9472effad1b70[// eslint-disable-next-line no-unused-vars
    "unitOfWork"] = 'UNIT_OF_WORK';
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


function $020871d0a4577cb7$export$b2ce9ad90858ed7a(text) {
    const textNode = {
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.textNode,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        textValue: text,
        children: []
    };
    return textNode;
}
function $020871d0a4577cb7$export$270e7ba5936d3c48(type, props, ...children) {
    const node = {
        type: type,
        props: props,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: children.map((el)=>typeof el === 'string' ? $020871d0a4577cb7$export$b2ce9ad90858ed7a(el) : el
        )
    };
    return node;
}
function $020871d0a4577cb7$export$34d901be6c9525f9(node) {
    if (node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.textNode && node.textValue) {
        const textDomNode = document.createTextNode(node.textValue);
        return textDomNode;
    }
    const domNode = document.createElement(node.type);
    if (node.props) Object.entries(node.props).map(([propName, propValue])=>{
        domNode[propName] = propValue;
    });
    return domNode;
}


var $53ffd25df6034fb9$exports = {};

$parcel$export($53ffd25df6034fb9$exports, "init", () => $53ffd25df6034fb9$export$2cd8252107eb640b);


const $53ffd25df6034fb9$var$queue = [];
const $53ffd25df6034fb9$var$nodesToDeleteFromDom = [];
let $53ffd25df6034fb9$var$uncommitedRootNode = undefined;
let $53ffd25df6034fb9$var$currentRootNode = undefined;
// let counter = false
// eslint-disable-next-line require-jsdoc
function $53ffd25df6034fb9$var$appendNodeToQueue(element, container) {
    $53ffd25df6034fb9$var$uncommitedRootNode = {
        // TODO: fix it
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: element.children,
        previousCommittedRootNode: $53ffd25df6034fb9$var$currentRootNode
    };
    const nextNode = $53ffd25df6034fb9$var$uncommitedRootNode;
    $53ffd25df6034fb9$var$queue.push(nextNode);
}
// eslint-disable-next-line require-jsdoc
function $53ffd25df6034fb9$var$workWithDom(node) {
    if (!node || !node.parent) return;
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.create && node.dom) // TODO: check it
    node.parent.dom.appendChild(node.dom);
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.delete) node.parent.dom.removeChild(node.dom);
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.update) $53ffd25df6034fb9$var$updateDomNode(node);
    $53ffd25df6034fb9$var$workWithDom(node.children[0]);
    $53ffd25df6034fb9$var$workWithDom(node.sibling);
}
const $53ffd25df6034fb9$var$isEvent = (key)=>key.startsWith('on')
;
const $53ffd25df6034fb9$var$isProperty = (key)=>key !== 'children'
;
const $53ffd25df6034fb9$var$isNew = (prev, next)=>(key)=>prev && next && prev[key] !== next[key] || !prev && next
;
const $53ffd25df6034fb9$var$isGone = (next)=>(key)=>next && !(key in next) || !next
;
// eslint-disable-next-line require-jsdoc
function $53ffd25df6034fb9$var$updateDomNode(node) {
    const prevProps = node.previousCommittedRootNode.props;
    const currentProps = node.props;
    if (prevProps) {
        Object.keys(prevProps).filter($53ffd25df6034fb9$var$isEvent).filter($53ffd25df6034fb9$var$isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.removeEventListener(eventType, prevProps[name]);
        });
        Object.keys(prevProps).filter($53ffd25df6034fb9$var$isProperty).filter($53ffd25df6034fb9$var$isGone(currentProps)).forEach((propName)=>node.dom[propName] = ''
        );
    }
    if (currentProps) {
        Object.keys(currentProps).filter($53ffd25df6034fb9$var$isProperty).filter($53ffd25df6034fb9$var$isNew(prevProps, currentProps)).forEach((propName)=>node.dom[propName] = currentProps[propName]
        );
        Object.keys(currentProps).filter($53ffd25df6034fb9$var$isEvent).filter($53ffd25df6034fb9$var$isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.addEventListener(eventType, currentProps[name]);
        });
    }
}
// eslint-disable-next-line require-jsdoc
function $53ffd25df6034fb9$var$runJobQueue(deadline) {
    console.log('run');
    let canRender = true;
    while(canRender && $53ffd25df6034fb9$var$queue.length){
        const currentNode = $53ffd25df6034fb9$var$queue[0];
        $53ffd25df6034fb9$var$queue.shift();
        const nextNode = $53ffd25df6034fb9$var$applyJob(currentNode);
        if (nextNode) $53ffd25df6034fb9$var$queue.push(nextNode);
        canRender = deadline.timeRemaining() < 1;
    }
    if ($53ffd25df6034fb9$var$queue.length) requestIdleCallback($53ffd25df6034fb9$var$runJobQueue);
    else if ($53ffd25df6034fb9$var$uncommitedRootNode) {
        // we need add root node to DOM separately of creating DOM element
        // because it can take more time that we want
        $53ffd25df6034fb9$var$nodesToDeleteFromDom.forEach($53ffd25df6034fb9$var$workWithDom);
        if ($53ffd25df6034fb9$var$uncommitedRootNode.children.length) $53ffd25df6034fb9$var$workWithDom($53ffd25df6034fb9$var$uncommitedRootNode.children[0]);
        $53ffd25df6034fb9$var$currentRootNode = $53ffd25df6034fb9$var$uncommitedRootNode;
        $53ffd25df6034fb9$var$uncommitedRootNode = undefined;
    }
}
// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function $53ffd25df6034fb9$var$applyJob(node) {
    if (!node.dom) node.dom = $020871d0a4577cb7$export$34d901be6c9525f9(node);
    $53ffd25df6034fb9$var$updateChildrenNode(node);
    if (node.children.length) return node.children[0];
    let nextNode = node;
    while(nextNode){
        if (nextNode.sibling) return nextNode.sibling;
        // TODO: fix it
        nextNode = nextNode.parent;
    }
}
// eslint-disable-next-line require-jsdoc
function $53ffd25df6034fb9$var$updateChildrenNode(node) {
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
            effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.update,
            props: childNode.props,
            children: childNode.children,
            textValue: childNode.textValue,
            dom: committedNode.dom,
            previousCommittedRootNode: childNode.previousCommittedRootNode,
            parent: node
        };
        if (committedNode && committedNode.type !== childNode.type) {
            // delete old node and add new node
            committedNode.effectTag = $faefaad95e5fcca0$export$ea8d20c92e194fd2.delete;
            $53ffd25df6034fb9$var$nodesToDeleteFromDom.push(committedNode);
            // TODO: check it
            newNode = {
                type: childNode.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
                props: childNode.props,
                children: childNode.children,
                textValue: childNode.textValue,
                parent: node
            };
        }
        if (!committedNode && childNode) // add new node
        newNode = {
            type: childNode.type,
            effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
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
function $53ffd25df6034fb9$export$2cd8252107eb640b(element, containerSelector) {
    const domContainer = document.querySelector(containerSelector);
    if (domContainer) {
        $53ffd25df6034fb9$var$appendNodeToQueue(element, domContainer);
        requestIdleCallback($53ffd25df6034fb9$var$runJobQueue);
    } else throw new Error(`Can't find element with selector ${containerSelector}`);
}



$parcel$exportWildcard(module.exports, $020871d0a4577cb7$exports);
$parcel$exportWildcard(module.exports, $53ffd25df6034fb9$exports);
$parcel$exportWildcard(module.exports, $faefaad95e5fcca0$exports);


//# sourceMappingURL=index.js.map

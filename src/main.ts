import {createDomNode} from './create-functions'
import {FiberNode, NodeTypes} from './types'

const queue: FiberNode[] = []

// eslint-disable-next-line require-jsdoc
function appendNodeToQueue(element: FiberNode, container: HTMLElement) {
    const nextNode: FiberNode = {
        // TODO: fix it
        type: NodeTypes.unitOfWork,
        dom: container,
        children: element.children,
    }
    queue.push(nextNode)
}

// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function runJobQueue(deadline: IdleDeadline) {
    let canRender = true
    while (canRender && queue.length) {
        const currentNode = queue.shift()
        const nextNode = applyJob(currentNode!)
        if (nextNode) {
            queue.push(nextNode)
        }
        canRender = deadline.timeRemaining() < 1
    }
    if (queue.length) {
        requestIdleCallback(runJobQueue)
        // console.log('was called')
    }
}

// eslint-disable-next-line require-jsdoc
function applyJob(node: FiberNode) {
    if (!node.dom) {
        node.dom = createDomNode(node)
    }
    if (node.parent) {
        node.parent.dom!.appendChild(node.dom)
    }

    const children = node.children
    let index = 0
    let prevSibling: FiberNode

    while (index < children.length) {
        const newNode: FiberNode = {
            type: children[index].type,
            props: children[index].props,
            children: children[index].children,
            parent: node,
            textValue: children[index].textValue ?? undefined,
        }

        if (index === 0) {
            node.children = [newNode]
        } else {
            // TODO: fix it
            prevSibling!.sibling = newNode
        }

        prevSibling = newNode
        index++
    }

    if (node.children.length) {
        return node.children[0]
    }
    let nextNode = node
    while (nextNode) {
        console.log(nextNode, nextNode.sibling)
        if (nextNode.sibling) {
            return nextNode.sibling
        }
        // TODO: fix it
        nextNode = nextNode.parent!
    }
}

// eslint-disable-next-line require-jsdoc
export function init(element: FiberNode, containerSelector: string) {
    const domContainer: HTMLElement | null =
        document.querySelector(containerSelector)
    if (domContainer) {
        appendNodeToQueue(element, domContainer)
        requestIdleCallback(runJobQueue)
    } else {
        throw new Error(`Can't find element with selector ${containerSelector}`)
    }
}

import {createDomNode} from '../create-functions'
import {EffectTags, FiberNode, NodeTypes} from '../types'

const queue: FiberNode[] = []
const nodesToDeleteFromDom: FiberNode[] = []
let componentProps: {[key: string]: any} = {}
let uncommitedRootNode: FiberNode | undefined = undefined
let currentRootNode: FiberNode | undefined = undefined

// eslint-disable-next-line require-jsdoc
function render(
    element: FiberNode,
    container: HTMLElement,
    props: {[key: string]: any}
) {
    uncommitedRootNode = {
        // TODO: fix it
        type: NodeTypes.unitOfWork,
        dom: container,
        effectTag: EffectTags.create,
        children: element.children,
        previousCommittedRootNode: currentRootNode,
    }
    componentProps = props
    const nextNode = uncommitedRootNode
    queue.push(nextNode)
}

// eslint-disable-next-line require-jsdoc
function workWithDom(node: FiberNode | undefined) {
    if (!node || !node.parent) {
        return
    }
    if (node.effectTag === EffectTags.create && node.dom) {
        // TODO: check it
        node.parent.dom!.appendChild(node.dom)
    }
    if (node.effectTag === EffectTags.delete) {
        node.parent.dom!.removeChild(node.dom!)
    }
    if (node.effectTag === EffectTags.update) {
        updateDomNode(node)
    }
    workWithDom(node.children[0])
    workWithDom(node.sibling)
}

// eslint-disable-next-line require-jsdoc
function updateDomNode(node: FiberNode) {
    const isEvent = (key: string) => key.startsWith('on')
    const isProperty = (key: string) => key !== 'children'
    const isNew =
        (
            prev: {[key: string]: any} | undefined,
            next: {[key: string]: any} | undefined
        ) =>
        (key: string) =>
            (prev && next && prev[key] !== next[key]) || (!prev && next)
    const isGone = (next: {[key: string]: any} | undefined) => (key: string) =>
        (next && !(key in next)) || !next

    const prevProps = node.previousCommittedRootNode!.props
    const currentProps = node.props

    if (prevProps) {
        Object.keys(prevProps)
            .filter(isEvent)
            .filter(isNew(prevProps, currentProps))
            .forEach(name => {
                const eventType = name.toLowerCase().substring(2)
                node.dom!.removeEventListener(eventType, prevProps[name])
            })

        Object.keys(prevProps)
            .filter(isProperty)
            .filter(isGone(currentProps))
            .forEach(propName => ((node.dom as any)[propName] = ''))
    }
    if (currentProps) {
        Object.keys(currentProps)
            .filter(isProperty)
            .filter(isNew(prevProps, currentProps))
            .forEach(propName => {
                ;(node.dom as any)[propName] = currentProps[propName]
            })

        Object.keys(currentProps)
            .filter(isEvent)
            .filter(isNew(prevProps, currentProps))
            .forEach(name => {
                const eventType = name.toLowerCase().substring(2)
                node.dom!.addEventListener(eventType, currentProps[name])
            })
    }
}

// eslint-disable-next-line require-jsdoc
function runJobQueue(deadline: IdleDeadline) {
    let canRender = true
    while (canRender && queue.length) {
        const currentNode = queue[0]
        queue.shift()
        const nextNode = applyJob(currentNode)
        if (nextNode) {
            queue.push(nextNode)
        }
        canRender = deadline.timeRemaining() < 1
    }

    if (queue.length) {
        requestIdleCallback(runJobQueue)
    } else if (uncommitedRootNode) {
        nodesToDeleteFromDom.forEach(workWithDom)

        // we need add root node to DOM separately of creating DOM element
        // because it can take more time that we want
        if (uncommitedRootNode.children.length) {
            workWithDom(uncommitedRootNode.children[0])
        }
        currentRootNode = uncommitedRootNode
        uncommitedRootNode = undefined
    }
}

// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function applyJob(node: FiberNode) {
    if (!node.dom) {
        node.dom = createDomNode(node, componentProps)
    }
    updateChildrenNode(node)

    // if node has a child we should apply job to it
    if (node.children.length) {
        return node.children[0]
    }

    // else if node has a siblind we should apply job to it
    // if node doesn't have a sibling nor child do nothing
    let nextNode = node
    while (nextNode) {
        if (nextNode.sibling) {
            return nextNode.sibling
        }
        // TODO: fix it
        nextNode = nextNode.parent!
    }
}

// eslint-disable-next-line require-jsdoc
function updateChildrenNode(node: FiberNode) {
    const children = node.children
    let index = 0
    let prevSibling: FiberNode | undefined
    let committedNode: FiberNode | undefined =
        node.previousCommittedRootNode?.children[0] ?? undefined

    while (index < children.length || committedNode) {
        let newNode!: FiberNode
        const childNode = children[index]

        if (committedNode && committedNode.type === childNode.type) {
            // update node props
            newNode = {
                type: childNode.type,
                effectTag: EffectTags.update,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                dom: committedNode.dom,
                previousCommittedRootNode: childNode.previousCommittedRootNode,
                parent: node,
            }
        }
        if (committedNode && committedNode.type !== childNode.type) {
            // delete old node and add new node
            committedNode.effectTag = EffectTags.delete
            nodesToDeleteFromDom.push(committedNode)
            // TODO: check it
            newNode = {
                type: childNode.type,
                effectTag: EffectTags.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
            }
        }
        if (!committedNode && childNode) {
            // add new node
            newNode = {
                type: childNode.type,
                effectTag: EffectTags.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
            }
        }

        if (committedNode) {
            committedNode = committedNode.sibling
        }

        if (childNode.type)
            if (prevSibling) {
                prevSibling!.sibling = newNode
            } else {
                node.children = [newNode]
            }

        prevSibling = newNode
        index++
    }
}

// eslint-disable-next-line require-jsdoc
export function init(
    element: FiberNode,
    containerSelector: string,
    props: {[key: string]: any}
) {
    const domContainer: HTMLElement | null =
        document.querySelector(containerSelector)
    if (domContainer) {
        render(element, domContainer, props)
        requestIdleCallback(runJobQueue)
    } else {
        throw new Error(`Can't find element with selector ${containerSelector}`)
    }
}

import {FiberNode, NodeTypes} from './types'

/**
 * Creating node containing only text
 * @param {string} text - text content for HTMLElement
 * @return {FiberNode} text node
 */
export function createTextNode(text: string): FiberNode {
    const textNode: FiberNode = {
        type: NodeTypes.textNode,
        textValue: text,
        children: [],
    }
    console.log(textNode)
    return textNode
}

/**
 *
 * @param {NodeTypes} type - type of node
 * @param {object} props - node properties
 * @param {Node[]} children - node children
 * @return {Node} - node instance
 */
export function createNode(
    type: NodeTypes,
    props: {[key: string]: any},
    ...children: FiberNode[]
) {
    const node: FiberNode = {
        type,
        props,
        children: children.map(el =>
            typeof el === 'string' ? createTextNode(el) : el
        ),
    }
    // console.log(node)
    return node
}

/**
 * Create DOM object from Node interface instance
 * @param {FiberNode} node - fiber node instance
 * @return {HTMLElement} domNode
 */
export function createDomNode(node: FiberNode): HTMLElement | Text {
    if (node.type === NodeTypes.textNode) {
        console.log(node)
    }
    if (node.type === NodeTypes.textNode && node.textValue) {
        const textDomNode = document.createTextNode(node.textValue)
        return textDomNode
    }

    const domNode = document.createElement(node.type)
    if (node.props) {
        Object.entries(node.props).map(([propName, propValue]) => {
            ;(domNode as any)[propName] = propValue
        })
    }

    return domNode
}

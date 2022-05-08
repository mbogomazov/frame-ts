import {EffectTags, FiberNode, NodeTypes} from './types'

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
    }
    return textNode
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
    }
    return functNode
}

/**
 *
 * @param {NodeTypes} type - type of node
 * @param {object} props - node properties
 * @param {FiberNode[]} children - node children
 * @return {FiberNode} - node instance
 */
export function createNode(
    type: NodeTypes | string,
    props: {[key: string]: any},
    ...children: (FiberNode | string | Function)[]
): FiberNode {
    const node: FiberNode = {
        type,
        props,
        effectTag: EffectTags.create,
        children: children.map(el => {
            if (typeof el === 'string') {
                return createTextNode(el)
            } else if (typeof el === 'function') {
                return createFuncNode(el)
            }
            return el
        }),
    }
    return node
}

/**
 * Create DOM object from Node interface instance
 * @param {FiberNode} node - fiber node instance
 * @param {object} props - props from component
 * @return {HTMLElement} domNode
 */
export function createDomNode(
    node: FiberNode,
    props: {[key: string]: any}
): HTMLElement | Text {
    if (node.type === NodeTypes.textNode && node.value) {
        const textDomNode = document.createTextNode(node.value as string)
        return textDomNode
    }
    if (node.type === NodeTypes.funcNode && node.value) {
        const computedValue = (node.value as Function)(props)

        const computedTextDomNode = document.createTextNode(computedValue)
        return computedTextDomNode
    }

    const domNode = document.createElement(node.type)
    if (node.props) {
        Object.entries(node.props).map(([propName, propValue]) => {
            // TODO: fix it
            if (typeof propValue === 'string') {
                ;(domNode as any)[propName] = propValue
            }
            if (typeof propValue === 'function') {
                ;(domNode as any)[propName] = () => propValue(props)
            }
        })
    }

    return domNode
}

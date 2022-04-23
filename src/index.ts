type Node = {
    type: string
    props: {
        [key: string]: any
        nodeValue?: string
        children: Node[]
    }
}

// eslint-disable-next-line require-jsdoc
export function createTextElement(text: string) {
    const textNode: Node = {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: [],
        },
    }
    return textNode
}

// eslint-disable-next-line require-jsdoc
export function createElement(
    type: string,
    props: {[key: string]: any},
    ...children: Node[]
) {
    const node: Node = {
        type,
        props: {
            ...props,
            children: children.map(el =>
                typeof el === 'string' ? createTextElement(el) : el
            ),
        },
    }
    return node
}

// eslint-disable-next-line require-jsdoc
export function render(element: Node, container: HTMLElement) {
    if (element.type === 'TEXT_ELEMENT') {
        const textDomNode = document.createTextNode(element.props.nodeValue!)
        container.appendChild(textDomNode)
        return
    }

    const domNode = document.createElement(element.type)
    container.appendChild(domNode)
    Object.keys(element.props).map((propName: string) => {
        if (propName === 'children') {
            return
        }
        ;(domNode as any)[propName] = element.props[propName]
    })
    element.props.children.map(child => render(child, domNode))
}

// eslint-disable-next-line require-jsdoc
export function init(element: Node, containerSelector: string) {
    const domContainer: HTMLElement | null =
        document.querySelector(containerSelector)
    if (domContainer) render(element, domContainer)
}

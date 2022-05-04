export enum NodeTypes {
    // eslint-disable-next-line no-unused-vars
    textNode = 'TEXT_NODE',
    // eslint-disable-next-line no-unused-vars
    unitOfWork = 'UNIT_OF_WORK',
}

export type Node = {
    type: NodeTypes
    props: {
        [key: string]: any
        nodeValue?: string
        children: Node[]
    }
}

// how it looks like https://pomb.us/static/a88a3ec01855349c14302f6da28e2b0c/ac667/fiber1.png
export type FiberNode = {
    type: NodeTypes
    dom?: HTMLElement | Text
    props?: {
        [key: string]: any
    }
    children: FiberNode[]
    parent?: FiberNode
    sibling?: FiberNode
    textValue?: string
}

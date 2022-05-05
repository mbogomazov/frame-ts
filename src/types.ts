export enum NodeTypes {
    // eslint-disable-next-line no-unused-vars
    textNode = 'TEXT_NODE',
    // eslint-disable-next-line no-unused-vars
    unitOfWork = 'UNIT_OF_WORK',
}

// how it looks like https://pomb.us/static/a88a3ec01855349c14302f6da28e2b0c/ac667/fiber1.png
export type FiberNode = {
    type: NodeTypes
    effectTag: EffectTags
    dom?: HTMLElement | Text
    props?: {
        [key: string]: any
    }
    children: FiberNode[]
    parent?: FiberNode
    sibling?: FiberNode
    previousCommittedRootNode?: FiberNode
    textValue?: string
}

export enum EffectTags {
    // eslint-disable-next-line no-unused-vars
    update = 'UPDATE',
    // eslint-disable-next-line no-unused-vars
    delete = 'DELETE',
    // eslint-disable-next-line no-unused-vars
    create = 'CREATE',
}

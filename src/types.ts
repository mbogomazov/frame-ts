/* eslint-disable require-jsdoc */
export enum NodeTypes {
    // eslint-disable-next-line no-unused-vars
    textNode = 'TEXT_NODE',
    // eslint-disable-next-line no-unused-vars
    unitOfWork = 'UNIT_OF_WORK',
    // eslint-disable-next-line no-unused-vars
    funcNode = 'FUNC_NODE',
    // eslint-disable-next-line no-unused-vars
    compNode = 'COMP_NODE',
}

export enum EffectTags {
    // eslint-disable-next-line no-unused-vars
    update = 'UPDATE',
    // eslint-disable-next-line no-unused-vars
    delete = 'DELETE',
    // eslint-disable-next-line no-unused-vars
    create = 'CREATE',
}

// how it looks like https://pomb.us/static/a88a3ec01855349c14302f6da28e2b0c/ac667/fiber1.png
export type FiberNode = {
    // TODO: fix type
    type: NodeTypes | string;
    children: FiberNode[];
    effectTag?: EffectTags;
    dom?: HTMLElement | Text;
    props?: PropsType;
    parent?: FiberNode;
    firstChild?: FiberNode;
    sibling?: FiberNode;
    previousCommittedRootNode?: FiberNode;
    value?: string | Function;
    hooks?: any[];
    isClassComponent?: boolean;
    parentComponent?: FiberNode;
};

export type PropsType = {[key: string]: any};
export type GlobalStateType = {
    nodesToDeleteFromDom: FiberNode[];
    // componentProps: PropsType
    uncommitedRootNode: FiberNode | undefined;
    currentRootNode: FiberNode | undefined;
    wipNode: FiberNode | undefined;
    hookIndex: number;
    addNodeToQueue: Function;
};

export type CompNode = {
    compConstructor: Function;
    props: PropsType;
};

// eslint-disable-next-line require-jsdoc
export class Component {
    template!: string;
    render(): FiberNode {
        return {
            type: '',
            children: [],
        };
    }

    constructor(public parentProps?: PropsType) {}
}

export enum NodeTypes {
    textNode = "TEXT_NODE",
    unitOfWork = "UNIT_OF_WORK",
    funcNode = "FUNC_NODE",
    compNode = "COMP_NODE"
}
export enum EffectTags {
    update = "UPDATE",
    delete = "DELETE",
    create = "CREATE"
}
export type FiberNode = {
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
    componentName?: string;
    componentInstance?: Component;
};
export type PropsType = {
    [key: string]: any;
};
export type GlobalStateType = {
    nodesToDeleteFromDom: FiberNode[];
    uncommitedRootNode: FiberNode | undefined;
    currentRootNode: FiberNode | undefined;
    wipNode: FiberNode | undefined;
    hookIndex: number;
    addNodeToQueue: Function;
};
export type CompNode = {
    type: string;
    children: FiberNode[];
    compConstructor: Function;
    props: PropsType;
    componentName: string;
};
export class Component {
    parentProps?: PropsType | undefined;
    template: string;
    render(): FiberNode;
    constructor(parentProps?: PropsType | undefined);
}
/**
 * Creating node containing only text
 * @param {string} text - text content for HTMLElement
 * @return {FiberNode} text node
 */
export function createTextNode(text: string): FiberNode;
/**
 * Creating node containing only text
 * @param {Function} func - text content for HTMLElement
 * @return {FiberNode} text node
 */
export function createFuncNode(func: Function): FiberNode;
export function createComponentNode(node: CompNode): FiberNode;
/**
 *
 * @param {NodeTypes} type - type of node
 * @param {object} props - node properties
 * @param {Function} componentConstructor - constructor of class extending Component
 * @param {string} componentName - name of component
 * @param {FiberNode[]} children - node children
 * @return {FiberNode} - node instance
 */
export function createNode(type: NodeTypes | string, props: PropsType, componentConstructor?: typeof Component, componentName?: string, ...children: (FiberNode | string | Function | CompNode)[]): FiberNode;
/**
 * Create DOM object from Node interface instance
 * @param {FiberNode} node - fiber node instance
 * @return {HTMLElement} domNode
 */
export function createDomNode(node: FiberNode): HTMLElement | Text;
export function getParentClassComponentProps(node: FiberNode): PropsType | undefined;
export class Router {
    routes: {
        [key: string]: string;
    };
    history: {
        [key: string]: string;
    }[];
    constructor(routes: {
        [key: string]: string;
    });
    push(routeLink: string): void;
    showMainComponent(routeLink: string): void;
    addComponentNode(node: FiberNode, componentName: string): void;
}
export function init(element: FiberNode, containerSelector: string, props: PropsType, routerObj?: Router): void;
export function parseTemplate(template: string, imports?: {
    [key: string]: typeof Component;
}): FiberNode;
export function useState(initial: any, globalState: GlobalStateType): any[];

//# sourceMappingURL=types.d.ts.map

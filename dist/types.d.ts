export enum NodeTypes {
    textNode = "TEXT_NODE",
    unitOfWork = "UNIT_OF_WORK"
}
export type FiberNode = {
    type: NodeTypes;
    effectTag: EffectTags;
    dom?: HTMLElement | Text;
    props?: {
        [key: string]: any;
    };
    children: FiberNode[];
    parent?: FiberNode;
    sibling?: FiberNode;
    previousCommittedRootNode?: FiberNode;
    textValue?: string;
};
export enum EffectTags {
    update = "UPDATE",
    delete = "DELETE",
    create = "CREATE"
}
/**
 * Creating node containing only text
 * @param {string} text - text content for HTMLElement
 * @return {FiberNode} text node
 */
export function createTextNode(text: string): FiberNode;
/**
 *
 * @param {NodeTypes} type - type of node
 * @param {object} props - node properties
 * @param {Node[]} children - node children
 * @return {Node} - node instance
 */
export function createNode(type: NodeTypes, props: {
    [key: string]: any;
}, ...children: FiberNode[]): FiberNode;
/**
 * Create DOM object from Node interface instance
 * @param {FiberNode} node - fiber node instance
 * @return {HTMLElement} domNode
 */
export function createDomNode(node: FiberNode): HTMLElement | Text;
export function init(element: FiberNode, containerSelector: string): void;

//# sourceMappingURL=types.d.ts.map

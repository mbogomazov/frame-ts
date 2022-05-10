import {FiberNode, GlobalStateType} from '../types';

// eslint-disable-next-line require-jsdoc
export function useState(initial: any, globalState: GlobalStateType) {
    const actionsQueue: Function[] = [];
    const oldHook =
        globalState.wipNode!.previousCommittedRootNode &&
        globalState.wipNode!.previousCommittedRootNode.hooks &&
        globalState.wipNode!.previousCommittedRootNode.hooks[
            globalState.hookIndex
        ];

    const hook = {
        state: oldHook ? oldHook.state : initial,
        queue: actionsQueue,
    };

    const actions = oldHook ? oldHook.queue : [];
    actions.forEach((action: Function) => {
        hook.state = action(hook.state);
    });

    const setState = (action: Function) => {
        hook.queue.push(action);
        globalState.uncommitedRootNode = {
            type: globalState.wipNode!.type,
            children: globalState.wipNode!.children,
            dom: globalState.wipNode!.dom,
            props: globalState.wipNode!.props,
            value: globalState.wipNode!.value,
            previousCommittedRootNode: globalState.wipNode!,
            parent: globalState.wipNode!.parent,
            firstChild: globalState.wipNode!.firstChild,
            parentComponent: globalState.wipNode!.parentComponent,
        };

        globalState.addNodeToQueue(globalState.uncommitedRootNode as FiberNode);
        globalState.nodesToDeleteFromDom = [];
    };

    globalState.wipNode!.hooks!.push(hook);
    globalState.hookIndex++;
    return [hook.state, setState];
}

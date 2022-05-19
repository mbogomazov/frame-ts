import {FiberNode} from '../types';

// eslint-disable-next-line require-jsdoc
export class Router {
    routes: {[key: string]: string} = {};
    history: {[key: string]: string}[] = [];
    private componentNodes: {[key: string]: FiberNode} = {};

    // eslint-disable-next-line require-jsdoc
    constructor(routes: {[key: string]: string}) {
        window.addEventListener('popstate', event => {
            const routeLink = event.state.routeLink;
            this.showMainComponent(routeLink);
        });
        this.routes = routes;
    }

    // eslint-disable-next-line require-jsdoc
    push(routeLink: string) {
        window.history.pushState({routeLink}, `${routeLink}`, routeLink);
        this.showMainComponent(routeLink);
    }

    // eslint-disable-next-line require-jsdoc
    showMainComponent(routeLink: string) {
        const selectedComponentName = this.routes[routeLink];
        for (const childNode of this.componentNodes[selectedComponentName]
            .children) {
            if (childNode.dom instanceof HTMLElement) {
                childNode.dom.style.display = 'block';
            }
        }

        for (const compName of Object.keys(this.componentNodes)) {
            if (compName === selectedComponentName) {
                continue;
            }

            for (const childNode of this.componentNodes[compName].children) {
                if (childNode.dom instanceof HTMLElement) {
                    childNode.dom.style.display = 'none';
                }
            }
        }
    }

    // eslint-disable-next-line require-jsdoc
    addComponentNode(node: FiberNode, componentName: string) {
        this.componentNodes[componentName] = node;
    }
}

import {init, parseTemplate as html, Component, Router} from '../../dist/index';

const router = new Router({
    '/': 'App',
    '/about': 'About',
});

// eslint-disable-next-line require-jsdoc
class AppComponent extends Component {
    template = `<div>
        <h1 class="red-box">This is app component</h1>
        <p onclick="{props.router.push('/about')}">About</p>
    </div>`;

    // eslint-disable-next-line require-jsdoc
    constructor(props) {
        super();
        this.props = props;
        this.props.router = router;
    }

    // eslint-disable-next-line require-jsdoc
    render() {
        return html(this.template);
    }
}

// eslint-disable-next-line require-jsdoc
class AboutComponent extends Component {
    template = `<div>
        <h1 class="green-box">This is about component</h1>
        <p onclick="{props.router.push('/')}">App</p>
    </div>`;

    // eslint-disable-next-line require-jsdoc
    constructor(props) {
        super();
        this.props = props;
        this.props.router = router;
    }

    // eslint-disable-next-line require-jsdoc
    render() {
        return html(this.template);
    }
}

const rootElement = html(
    `
<div>
    <App router="{props.router}" />
    <About />
</div>
`,
    {
        App: AppComponent,
        About: AboutComponent,
    }
);

init(
    rootElement,
    '#app',
    {
        router,
    },
    router
);

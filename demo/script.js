import {
    init,
    useState,
    parseTemplate as html,
    Component,
    useState,
} from '../dist/index';

// eslint-disable-next-line require-jsdoc
class AppComponent extends Component {
    template = `<div>
        <h1 class="red-box">This is app component</h1>
        <StateComponent name="state" />
    </div>`;

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
    }

    // eslint-disable-next-line require-jsdoc
    render() {
        return html(this.template, {
            StateComponent: StateComponent,
        });
    }
}

// eslint-disable-next-line require-jsdoc
class StateComponent extends Component {
    template = `<div>
        <div>
            <h1>Hello {props.name}</h1>
            <p>The char is: {props.state.char}</p>
            <p>The state is: {props.state.num}</p>
        </div>
        <button onclick="{props.setState(({char, num}) => ({num, char: String.fromCharCode(char.charCodeAt(0) + 1)}) )}" >Go to next char</button>
        <button onclick="{props.setState(({char, num}) => ({num: num + 1, char}) )}" >Increment state</button>
    </div>`;

    // eslint-disable-next-line require-jsdoc
    constructor(props) {
        super();
        this.props = props;
        [this.props.state, this.props.setState] = useState(
            {
                char: 'a',
                num: 1,
            },
            this.props.globalState
        );
    }

    // eslint-disable-next-line require-jsdoc
    render() {
        return html(this.template);
    }
}

const rootElement = html('<App name="app component" />', {
    App: AppComponent,
});

init(rootElement, '#app', {
    name: 'App element',
});

/* eslint-disable require-jsdoc */
import {init, parseTemplate as html, Component} from '../../dist/index';

class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return html(`
            <div>
                <p>Hello {props.name}</p>
            </div>
        `);
    }
}

const rootElement = html(
    `
        <App name="App component" />
    `,
    {
        App: AppComponent,
    }
);

init(rootElement, '#app', {});

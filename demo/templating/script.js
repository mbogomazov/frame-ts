import {init, parseTemplate as html} from '../../dist/index';

const rootElement = html(
    `
<div>
    <p>Hello {props.name}</p>
</div>`
);

init(rootElement, '#app', {
    name: 'Template World!',
});

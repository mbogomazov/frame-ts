import {init, useState, parseTemplate as html} from '../dist/index'
// const [state, setState] = useState(1)
const mainDiv = html(`
<div>
    <a href="https://google.com">
        <img src="https://images.clipartlogo.com/files/images/44/441434/bananas-icon-clip-art_p.jpg" alt="Banana Image" />
    </a>
    <div>
        <button onclick="{() => setState(c => c + 1)}" >{props.title}</button>
    </div>
    <div>
        <p>Counter: {props.counter}</p>
    </div>
</div>`)
init(mainDiv, '#app', {
    title: 'banana',
    counter: 0,
})

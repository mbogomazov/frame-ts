import {createNode, init} from '../dist/index'
const img = createNode('img', {
    src: 'https://images.clipartlogo.com/files/images/44/441434/bananas-icon-clip-art_p.jpg',
    alt: 'Banana Image',
})
const a = createNode('a', {href: 'https://google.com'}, img)
const h2 = createNode('h2', {}, 'BANANA!!!')
const div = createNode('div', {}, h2)
const mainDiv = createNode('div', {}, a, div)
init(mainDiv, '#app')

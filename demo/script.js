import {createElement, init} from '../dist/index.js'
const img = createElement('img', {
    src: 'https://seeklogo.com/images/T/tinkoff-logo-BE406CDE9D-seeklogo.com.png',
    alt: 'Tinkoff Logo',
})
const a = createElement('a', {href: 'https://tinkoff.ru'}, img)
init(a, '#app')

import {createNode} from '../create-functions'

// eslint-disable-next-line require-jsdoc
export default function parseElement(template: string) {
    // first opening tag
    // let match = template.match(/<(\w+)/)
    let match = template.match(
        /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\|,.? ]*(?!<|\n)/
    )
    // const matchCloseTag = template.match(/<\//)
    // console.log(template)

    const node: {[key: string]: any} = {
        length: 0,
        props: {},
        children: [],
        type: 'element',
    }
    if (match) {
        // if no opening tag it means there is a content that in template
        template = template.split('<')[0]
        return parseValue(template)
    }
    match = template.match(/^\n*?[ \t]*?<\/(\w+).?(?!>)/)
    if (match) {
        node.length = match[0].length
        node.type = 'closingTag'
        return node
    }

    match = template.match(/<(\w+)/)
    node.name = match![1]
    console.log(node.name)
    let length = match!.index! + match![0].length
    template = template.slice(length)
    // console.log(template)
    node.length += length

    // self close tag
    match = template.match(/^ (.+)?(?=\/>)/)
    if (match) {
        node.length += match.index! + match[0].length
        return node
    }

    match = template.match(/>/)

    if (!match) return node

    length = match.index! + 1
    template = template.slice(length)
    console.log(template)
    node.length += length

    let child: {[key: string]: any} = {}
    child = parseElement(template)

    // while (child.type === types.element || child.value) {
    while (child.type === 'element' || child.value) {
        length = child.length
        console.log(node.name, template)
        template = template.slice(length)
        console.log(template)
        node.length += length
        node.children.push(child)
        child = parseElement(template)
    }

    match = template.match(new RegExp(`^\n*?[ \t]*?</${node.name}>`))

    if (!match) {
        return node
    }

    node.length += match[0].length
    return node
}

// eslint-disable-next-line require-jsdoc
function parseValue(str: string) {
    // first closing tag
    const match = str.match(/>/)
    const node: {[key: string]: any} = {
        props: {},
        length: str.length,
        value: str.trim(),
    }

    if (!match) return node

    node.props = parseProps(str.slice(0, match.index))
    const length = node.props.length
    str = str.slice(length)
    node.length += length
    return node
}

// eslint-disable-next-line require-jsdoc
function parseProps(str: string) {
    const node: {[key: string]: any} = {props: {}, length: 0}
    // regex to get attributes from tag
    const matchNextProp = () =>
        // str.match(/ *\w+="(?:.*[^\\]")?/) || str.match(/ *\w+/)
        str.match(/ *\w+=\".+?(?=")"/) || str.match(/ *\w+/)

    const match = matchNextProp()
    if (!match) {
        return node
    }

    for (const propStr of match) {
        let [propKey, ...propValues] = propStr.split('=')
        node.length += propStr.length
        propKey = propKey.trim()
        let propValue: string | boolean = propValues.join('=')
        propValue =
            typeof propValue === 'string' ? propValue.slice(1, -1) : true
        node.props[propKey] = propValue
        str =
            str.slice(0, match.index) + str.slice(match.index! + propStr.length)
    }

    return node
}

const templateStr = `<template>
    <div>
        <h1>Hello, {John}</h1>
    </div>
    <a href="https://google.com">
        <img src="john.png" alt="John's face"/>
    </a>
</template>
`
// const mainDiv = createNode('div', props)
console.log(JSON.stringify(parseElement(templateStr)))

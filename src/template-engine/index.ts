// import {createNode} from '../create-functions'

type NodeType = {
    type: 'closing' | 'self-closing' | 'element' | 'value'
    name: string
    length: number
    value: string
    props: {[key: string]: any}
    children: NodeType[]
}

// eslint-disable-next-line require-jsdoc
export default function parseElement(
    template: string,
    lastOpenedTagName: string = ''
) {
    const openingTag = /^\n*?[ \t]*?<(\w+)/
    const endOpeningTag = />/

    const node: NodeType = {
        type: 'element',
        name: '',
        length: 0,
        value: '',
        props: {},
        children: [],
    }
    let match = template.match(openingTag)
    const closingTag = new RegExp(`[ \t]*?</${lastOpenedTagName}>`)

    if (!match) {
        // if no opening tag we should find closing tag
        // and between them parse value
        match = template.match(closingTag)
        if (!match) {
            throw new Error('parsing error: no closing tag')
        }
        const nodeValue = template.slice(0, match.index!).trim()
        node.length = match.index! + match[0].length
        node.type = 'closing'
        node.value = nodeValue
        return node
    }

    let nodeLength = match.index! + match[0].length
    node.name = match[1]

    template = template.slice(match.index! + match[0].length)

    // find the end of opened tag
    match = template.match(endOpeningTag)
    if (!match) {
        throw new Error('parsing error: no end of opening tag')
    }

    nodeLength += match.index! + match[0].length
    const propsStr = template.slice(0, match.index!)

    node.props = parseProps(propsStr)

    // if self-closing tag
    if (template.slice(match.index! - 1, match.index! + 1) === '/>') {
        node.type = 'self-closing'
        node.length = nodeLength
        return node
    }

    // nodeLength += propsStr.length
    template = template.slice(match.index! + 1)

    let childNode = parseElement(template, node.name)
    while (childNode.type !== 'closing') {
        template = template.slice(childNode.length)
        node.children.push(childNode)
        nodeLength += childNode.length
        childNode = parseElement(template, node.name)
    }

    nodeLength += childNode.length
    if (childNode.value.length) {
        node.children.push({
            type: 'value',
            name: '',
            length: childNode.length,
            value: childNode.value,
            props: {},
            children: [],
        })
    }
    node.length = nodeLength
    return node
}

// eslint-disable-next-line require-jsdoc
function parseValue(str: string) {}

// eslint-disable-next-line require-jsdoc
function parseProps(str: string) {
    const props: {[key: string]: any} = {}
    // regex to get attributes from tag
    const matchNextProp = () =>
        str.match(/ *\w+=\".+?(?=")"/) || str.match(/ *\w+/)

    let match = matchNextProp()
    if (!match) {
        return props
    }

    while (match) {
        const propStr = match[0]
        let [propKey, ...propValues] = propStr.split('=')
        propKey = propKey.trim()
        let propValue: string | boolean = propValues.join('=')
        propValue =
            typeof propValue === 'string' && propValue.length
                ? propValue.slice(1, -1)
                : true
        props[propKey] = propValue
        str =
            str.slice(0, match.index) + str.slice(match.index! + propStr.length)
        match = matchNextProp()
    }

    return props
}

const templateStr = `<template id="app" visible>
    <div>
        <h1>Hello, {John}</h1>
        <div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
    <a href="https://google.com">
        <img src="john.png" alt="John's face"/>
    </a>
</template>
`
// const mainDiv = createNode('div', props)
console.log(JSON.stringify(parseElement(templateStr)))

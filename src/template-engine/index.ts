import {createNode} from '../create-functions'

// eslint-disable-next-line require-jsdoc
export default function parseElement(template: string) {
    // let match = template.match(/<(\w+)/)
    const openingTag = /^\n*?[ \t]*?<(\w+)/
    console.log(template)
    const endOpeningTag = />/

    type nodeType = {
        type: string
        name: string
        length: number
        value: string
        props: {[key: string]: any}
        children: nodeType[]
    }
    const node: nodeType = {
        type: '',
        name: '',
        length: 0,
        value: '',
        props: {},
        children: [],
    }
    let match = template.match(openingTag)
    if (!match) {
        // return parseValue(template)
        node.type = 'value'
        node.value = template
        node.length = template.length
        return node
    }
    let nodeLength = match.index! + match[0].length
    node.name = match[1]
    const closingTag = new RegExp(`[ \t]*?</${node.name}>`)
    const selfClosingTag = new RegExp(`<${node.name}.*\/>`)
    const closingTagMatch = template.match(selfClosingTag)
    if (closingTagMatch) {
        node.props = parseProps(
            template.slice(match.index! + match[0].length, -3)
        )
        nodeLength += node.props.length + 3
        node.length = nodeLength
        return node
    }
    template = template.slice(match.index! + match[0].length)

    match = template.match(endOpeningTag)
    if (!match) {
        throw new Error('parsing error: no end of opening tag')
    }

    nodeLength += match.index! + match[0].length
    const propsStr = template.slice(0, match.index!)
    node.props = parseProps(propsStr)
    nodeLength += propsStr.length
    template = template.slice(match.index! + 1)
    match = template.match(closingTag)
    if (!match) {
        throw new Error('parsing error: tag was not closed')
    }
    template = template.slice(0, match.index!)
    nodeLength += match.index! + match[0].length
    while (template.trim().length) {
        const childNode = parseElement(template)
        node.children.push(childNode)
        template = template.slice(childNode.length)
    }
    node.length = nodeLength
    return node
    // new RegExp(`^\n*?[ \t]*?</${node.name}>`)
    //     let match = template.match(
    //         /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\|,.? ]*(?!<|\n)/
    //     )
    //     // const matchCloseTag = template.match(/<\//)
    //     // console.log(template)

    //     const node: {[key: string]: any} = {
    //         length: 0,
    //         props: {},
    //         children: [],
    //         type: 'element',
    //     }
    //     if (match) {
    //         // if no opening tag it means there is a content that in template
    //         template = template.split('<')[0]
    //         return parseValue(template)
    //     }
    //     const openingTag = /^\n*?[ \t]*?<(\w+).?(?!>)/
    //     const closingTag = /^\n*?[ \t]*?<\/(\w+).?(?!>)/
    //     match = template.match(closingTag)
    //     if (match) {
    //         node.length = match[0].length
    //         node.type = 'closingTag'
    //         return node
    //     }

    //     match = template.match(/<(\w+)/)
    //     node.name = match![1]
    //     console.log(node.name)
    //     let length = match!.index! + match![0].length
    //     template = template.slice(length)
    //     // console.log(template)
    //     node.length += length

    //     // self close tag
    //     match = template.match(/^ (.+)?(?=\/>)/)
    //     if (match) {
    //         node.length += match.index! + match[0].length
    //         return node
    //     }

    //     match = template.match(/>/)

    //     if (!match) return node

    //     length = match.index! + 1
    //     template = template.slice(length)
    //     console.log(template)
    //     node.length += length

    //     let child: {[key: string]: any} = {}
    //     child = parseElement(template)

    //     // while (child.type === types.element || child.value) {
    //     while (child.type === 'element' || child.value) {
    //         length = child.length
    //         console.log(node.name, template)
    //         template = template.slice(length)
    //         console.log(template)
    //         node.length += length
    //         node.children.push(child)
    //         child = parseElement(template)
    //     }

    //     match = template.match(new RegExp(`^\n*?[ \t]*?</${node.name}>`))

    //     if (!match) {
    //         return node
    //     }

    //     node.length += match[0].length
    //     return node
}

// eslint-disable-next-line require-jsdoc
function parseValue(str: string) {}

// eslint-disable-next-line require-jsdoc
function parseProps(str: string) {
    const props: {[key: string]: any} = {}
    // regex to get attributes from tag
    const matchNextProp = () =>
        // str.match(/ *\w+="(?:.*[^\\]")?/) || str.match(/ *\w+/)
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

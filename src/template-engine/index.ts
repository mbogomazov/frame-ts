import {createNode} from '../create-functions'
import {FiberNode} from '../types'

type TagNodeType = {
    type: 'closing' | 'self-closing' | 'element' | 'textValue' | 'funcValue'
    name: string
    length: number
    value: string | Function
    props: {[key: string]: any}
    children: TagNodeType[]
}

// eslint-disable-next-line require-jsdoc
export default function parseElement(
    template: string,
    lastOpenedTagName: string = ''
) {
    const openingTag = /^\n*?[ \t]*?<(\w+)/
    const endOpeningTag = />/

    const node: TagNodeType = {
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
        const nodeValue = parseValue(template.slice(0, match.index!).trim())
        if (nodeValue.length === 0) {
            node.value = ''
        } else {
            for (const childNodeContent of nodeValue) {
                if (typeof childNodeContent === 'string') {
                    node.children.push({
                        type: 'textValue',
                        name: '',
                        value: childNodeContent,
                        props: {},
                        length: childNodeContent.length,
                        children: [],
                    })
                } else {
                    node.children.push({
                        type: 'funcValue',
                        name: '',
                        value: childNodeContent,
                        props: {},
                        length: NaN,
                        children: [],
                    })
                }
            }
        }
        node.length = match.index! + match[0].length
        node.type = 'closing'

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

    let templateCopy = template
    let cuttedSymbols = 0
    // check if we found '=>' in arrow function
    while (match && templateCopy[match.index! - 1] === '=') {
        templateCopy = templateCopy.slice(match!.index! + 1)
        cuttedSymbols += match!.index! + 1
        match = templateCopy.match(endOpeningTag)
    }

    if (!match) {
        throw new Error('parsing error: no end of opening tag')
    }

    nodeLength += match.index! + match[0].length + cuttedSymbols
    const propsStr = template.slice(0, match.index! + cuttedSymbols)

    node.props = parseProps(propsStr)

    // if self-closing tag
    if (
        template.slice(
            match.index! + cuttedSymbols - 1,
            match.index! + cuttedSymbols + 1
        ) === '/>'
    ) {
        node.type = 'self-closing'
        node.length = nodeLength
        return node
    }

    // nodeLength += propsStr.length
    template = template.slice(match.index! + cuttedSymbols + 1)

    let childNode = parseElement(template, node.name)
    while (childNode.type !== 'closing') {
        template = template.slice(childNode.length)
        node.children.push(childNode)
        nodeLength += childNode.length
        childNode = parseElement(template, node.name)
    }

    nodeLength += childNode.length
    if (childNode.value.length) {
        node.children.push(childNode)
    } else if (childNode.children.length) {
        node.children.push(...childNode.children)
    }
    node.length = nodeLength
    return node
}

// TODO: write it
// (string | FiberNode)[]
// eslint-disable-next-line require-jsdoc
function parseValue(str: string) {
    const curlyBracets = /{[^}]*}/
    let match = str.match(curlyBracets)
    const children: (string | Function)[] = []
    while (match) {
        const prevTextNode = str.slice(0, match.index!)
        if (prevTextNode.length) {
            children.push(prevTextNode)
        }
        const funcNodeStr = str
            .slice(match.index! + 1, match.index! + match[0].length - 1)
            .trim()
        const funcNode = createFuncValue(funcNodeStr)
        children.push(funcNode)
        str = str.slice(match.index! + match[0].length)
        match = str.match(curlyBracets)
    }
    if (str.length) {
        children.push(str)
    }
    return children
}

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

    // console.log(match, str)
    while (match) {
        const propStr = match[0]
        let [propKey, ...propValues] = propStr.split('=')
        propKey = propKey.trim()
        let propValue: string | boolean | Function = propValues.join('=')
        propValue =
            typeof propValue === 'string' && propValue.length
                ? propValue.slice(1, -1)
                : true
        const curlyBracets = /{.*}/

        if (typeof propValue === 'string') {
            const bracetsMatch = propValue.match(curlyBracets)
            if (bracetsMatch) {
                propValue = createFuncValue(bracetsMatch[0].slice(1, -1))
            }
        }
        props[propKey] = propValue
        str =
            str.slice(0, match.index) + str.slice(match.index! + propStr.length)
        match = matchNextProp()
    }

    return props
}

// eslint-disable-next-line require-jsdoc
function createFuncValue(str: string) {
    // eslint-disable-next-line no-new-wrappers
    return new Function(
        'props',
        // eslint-disable-next-line no-new-wrappers
        `return ${str}`
    )
}

// eslint-disable-next-line require-jsdoc
function convertTagNodeToFiberNode(tagNode: TagNodeType): FiberNode {
    const convertedNode = {
        type: tagNode.name,
        props: tagNode.props,
        children: tagNode.children.map(node =>
            node.type === 'textValue' || node.type === 'funcValue'
                ? node.value
                : convertTagNodeToFiberNode(node)
        ),
    }
    return createNode(
        convertedNode.type,
        convertedNode.props,
        ...convertedNode.children
    )
}

// example of template
// const templateStr = `<template id="app" visible>
//     <div>
//         <h1>Hello, {props.name} {props.surname}, nice to meet you</h1>
//         <div>
//             <div>
//                 <ul>
//                     <li>1</li>
//                     <li>2</li>
//                     <li>3</li>
//                     <li>4</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//     <a href="https://google.com">
//         <img src="john.png" alt="John's face"/>
//     </a>
// </template>
// `

// eslint-disable-next-line require-jsdoc
export function parseTemplate(template: string): FiberNode {
    const rootNode = parseElement(template, '')
    const rootFiberNode = convertTagNodeToFiberNode(rootNode)
    return rootFiberNode
}

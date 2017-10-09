import { join } from 'path'
import { readFileSync } from 'fs'
import React from 'react'
import { getAppPrefix } from 'ethical-utility-resolve-module'

const app = getAppPrefix()
const scriptPath = '/node_modules/ethical-scripts-frontend/dist/'
const initScript = `
    window.require
        .load('module?exclude=' + window.require.ids.toString())
        .then(() => setTimeout(() => window.require('${app}'), 0))
        .catch(e => console.error(e))
`
const beforeScript = (state) => (`
    window.process = { env: {} }
    window.state = JSON.parse('${JSON.stringify(state)}')
`)

const getInitScripts = (state = {}) => {
    const scriptName = (process.env.NODE_ENV || 'NODE_ENV_UNDEFINED') + '.js'
    const script = scriptPath + scriptName
    const before = beforeScript(state)
    return [
        <script key='0' dangerouslySetInnerHTML={{ __html: before }} />,
        <script key='1' src={script} />,
        <script key='2' dangerouslySetInnerHTML={{ __html: initScript }} />
    ]
}

export default getInitScripts

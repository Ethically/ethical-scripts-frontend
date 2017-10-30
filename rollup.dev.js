import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'

export default ({
    input: './dist/development.js',
    output: {
        name: 'MyBundle',
        file: './dist/development.js',
        format: 'umd'
    },
    sourcemap: true,
    context: 'window',
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            browser: true,
            extensions: [ '.js', '.json' ],
            preferBuiltins: false
        }),
        commonjs(),
        builtins()
    ]
})

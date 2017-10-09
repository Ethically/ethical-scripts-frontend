import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import uglify from 'rollup-plugin-uglify'

export default ({
    input: './dist/production.js',
    name: 'MyBundle',
    output: {
        format: 'umd',
        file: './dist/production.js'
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
        builtins(),
        uglify()
    ]
})

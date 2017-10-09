var debug = process.env.DEBUG

var reporters = ( debug ? [] : ['nutra-coverage'] )
var srcPreprocessors = ['nutra-babel']
if (!debug) {
    srcPreprocessors.push('nutra-coverage')
}

var babelConfig = {
    babelrc: false,
    presets: [
        [
            'env',
            {
                targets: {
                    node: '7.5'
                },
                debug: true,
                useBuiltIns: true
            }
        ],
        'react'
    ],
    plugins: [
        [ "transform-object-rest-spread", { "useBuiltIns": true } ]
    ]
}

module.exports = function( config ) {
  config.set({
    frameworks: ['nutra-jasmine'],
    files: ['test/specs/**/*.js', 'src/index.js'], // Modify to include your own app & spec files
    preprocessors: {
        'test/specs/**/*.js': ['nutra-babel'], // Modify to include your spec files
        'src/index.js': srcPreprocessors // Modify to include your app files
    },
    reporters: reporters,
    babelOptions: babelConfig,
    coverageOptions: {
      reporters: [
        { type: 'html', subdir: '.' }
      ]
      // For more coverage options, see:
      // https://github.com/m-a-r-c-e-l-i-n-o/nutra-coverage
    }
  })
  // For more configuration options, see:
  // https://github.com/m-a-r-c-e-l-i-n-o/nutra#configuration-anatomy
}

module.exports = {
  production: {
    options: {
      compress: {
        drop_debugger: true,
        conditionals: true,
        booleans: true,
        loops: true,
        unused: true,
        drop_console: true
      },
      preserveComments: false
    },
    files: {
      'public/js/main.js': ['public/js/main.js']
    }
  },
  development: {
    options: {
      beautify: true,
      indentLevel: 4
    },
    files: {
      'public/js/main.js': [
        'public/js/polyfill.js',
        'public/js/main.js'
      ]
    }
  }
};
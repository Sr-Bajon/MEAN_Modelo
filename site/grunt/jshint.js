module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    ignores : ['app/views/*', 'config/log/*'],
    globals: {},
    force: true,
    eqeqeq: true,
    undef: true,
    node: true
  },
  files  : [
    'Gruntfile.js',
    'grunt/**/*',
    'server.js',
    'app/**/*',
    'config/**/*'
  ]
};
module.exports = {
  jshint: {
    files: require('./jshint').files,
    tasks: ['jshint']
  },
  libsass: {
    files: require('./libsass').target.src,
    tasks:['libsass', 'autoprefixer']
  },
  browserify:{
    files: require('./browserify').browser.src,
    tasks: ['browserify', 'traceur', 'autopolyfiller', 'uglify:development', 'clean']
  }
};
module.exports = {
  bsFiles: {
    src : [
      'public/css/main.css',
      'app/views/*.jade',
      'public/js/*.js'
    ]
  },
  options: {
    server: {
      baseDir: "./"
    },
    watchTask: true,
    logLevel: "info",
    logConnections: true,
    proxy: 'localhost:3000'
  }
};
/*jslint node: true */
"use strict";

var express = require('./config/express.config'),
    browserSync = require('browser-sync'),
    config = require('./config/config');

var app = express();

function startServer() {
  app.listen(config.puerto, function () {
    if (process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === undefined) {

      browserSync({
        proxy: 'localhost:' + config.puerto,
        ui: {port:8080},
        open: false,
        reloadOnRestart: false,
        files: [
          'public/css/main.css',
          'app/views/*.jade',
          'public/js/*.js'
        ]
      });
      console.log('Browser-Sync iniciado en http://localhost:3001');
      console.log('Browser-Sync UI en http://localhost:8080');
    }
    console.log('Servidor iniciado en http://localhost:' +
    config.puerto + '; ' + app.get('env') + ': Presiona Ctrl-C para terminar.');
  });
}

if (require.main === module) {
  // application run directly; start app server
  startServer();
} else {
  // application imported as a module via "require": export function
  // to create server
  module.exports = startServer;
}

//Modifica el entorno solo durante la duración del comando
//$ NODE_ENV=production node server.js
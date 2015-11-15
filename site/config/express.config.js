/*jslint node: true */
"use strict";

//en este archivo se realizará la configuración de express
var config = require('./config'),
  express = require('express'),
  compress = require('compression'),
  morgan = require('morgan'),
  expressLogger = require('express-logger'),
  http = require('http'),
  jade = require('jade')//,
//https = require('https')
  ;

module.exports = function(){
  var app = express();

  //recordar cambiar tb la variable para contenido estaico en los archivos SASS
  app.locals.staticHelper = require('../app/controllers/staticContent');

  app.set('views', './app/views');
  app.set('view engine', 'jade');

  if(process.env.NODE_ENV === 'production'){
    app.use(compress());
    app.use(expressLogger({
      path: __dirname + '/log/requests.log'
    }));
  }else{ //development
    //para que Jade compile el html mas legible en desarrollo
    app.locals.pretty = true;
    //logger
    app.use(morgan('dev'));
  }

  var server = http.createServer(app);
  //https.createServer(options, app);

  /* //////////////////////////////////////////////////////
   // AQUI SE INCLUIRAN LAS RUTAS Y MIDDLEWARE PROPIO    //
   /////////////////////////////////////////////////////*/

  //añadimos un dominio para controlar las excepciones incontroladas
  require('../app/controllers/errorDomain')(app, server);


  require('../app/routes/index.server.routes.js')(app);

  app.use(express.static('public'));
  require('../app/routes/error.server.routes.js')(app);
  //FIN RUTAS

  return app;
};
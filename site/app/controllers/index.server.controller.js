/*jslint node: true */
"use strict";

exports.root = function(req, res){
    //Para mostrar que worker es el que ha recibido la petición
    /*
    var cluster = require('cluster');
    if(cluster.isWorker) console.log('Worker %d received request',
        cluster.worker.id);
        */
    res.type('text/html');
    res.render('index', {
      nombre: 'Ismael',
      apellido: 'Rodriguez',
      objeto: {
        propiedad: 'probando'
      }
    });
};

exports.about = function(req, res){
    res.type('text/plain');
    res.send('Acerca de');
};

/*
 Configuración del middleware para protecion Cross-Site
 Para enviar el campo al view

     app.get('/form', function(req, res) {
        res.render('send', { csrfToken: req.csrfToken() })
     })

 Recordar incluir en los formularios el campo oculto

    <input type="hidden" name="_csrf" value="<%= csrfToken %>">
 */
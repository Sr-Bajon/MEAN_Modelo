/*jslint node: true */
"use strict";

module.exports = function(app){
    var index = require('../controllers/index.server.controller.js');

    app.get('/', index.root);

    app.get('/about', index.about);

    //rutas para probar los errores
    app.get('/fail', function(req, res){
        throw new Error('Nope!');
    });
    app.get('/epic-fail', function(req, res){
        process.nextTick(function(){
            throw new Error('Kaboom!');
        });
    });
};
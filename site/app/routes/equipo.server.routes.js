/*jslint node: true */
"use strict";

var equipo = require('../controllers/equipo.server.controller.js');

module.exports = function(app){
    app.route('/equipo')
        .get(equipo.listar)
        .post(equipo.crear);
    app.route('/equipo/:equipoId')
        .get(equipo.mostrarUno)
        .put(equipo.actualizar)
        .delete(equipo.borrar);
    app.param('equipoId', equipo.buscarPorId);
};
/*jslint node: true */
"use strict";

var mongoose = require('mongoose'),
    Equipo = mongoose.model('Equipo');

module.exports.crear = function(req, res) {
    var equipo = new Equipo(req.body);
    equipo.save(function (err) {
        if (err) {
            res.status(400);
            res.type('text/plain');
            res.send(err);
        } else {
            res.json(equipo);
        }
    });
};

module.exports.listar = function(req, res){
    Equipo.find({}).sort('-created').exec(function(err, equipos){
       if(err) return res.status(400).send(err);

       res.json(equipos);
    });
};

module.exports.buscarPorId = function(req ,res, next, id){
    Equipo.findById(id).exec(function(err, data){
       if (err) return next(err);
       if(!data) return next(new Error('Error al buscar el equipo' + id));
       req.equipo = data;
       next();
    });
};

module.exports.mostrarUno = function(req, res){
    res.json(req.equipo);
};

module.exports.actualizar = function(req, res){
    var equipo = req.equipo;
    equipo.nombre = req.body.nombre;
    equipo.save(function(err){
        if(err) return res.status(400).send('No se ha podido actualizar');
        res.json(equipo);
    });
};

module.exports.borrar = function(req, res){
    var equipo = req.equipo;
    equipo.remove(function(err){
        if(err) return res.status(400).send('No se ha podido actualizar');
        res.json(equipo);
    });
};
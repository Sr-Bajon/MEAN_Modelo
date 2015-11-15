/*jslint node: true */
"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EquipoSchema = new Schema({
    nombre: String,
    entrenador : String,
    ayudantes : [String],
    activo: Boolean
});

mongoose.model('Equipo', EquipoSchema);
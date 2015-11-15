/*jslint node: true */
"use strict";

var config = require('../../config/config');

module.exports = function(ruta){
    return config.staticFolder + ruta;
};
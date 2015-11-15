/*jslint node: true */
"use strict";

exports.pag404 = function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - No encontrada');
};

//cuando se llama a next(err) va directamente a este middleware
exports.pag500 =  function(err, req, res, next){

    var msg;
    if(process.env.NODE_ENV === 'production'){
        var from = 'SERVER ERROR',
            to = 'ismael.dai@gmail.com',
            subject = 'SERVER ERROR',
            text = err;
        //require('./enviarEmail')(from, to, subject, err);
        msg = '500 - Server Error';
    }else{
        console.error(err.stack);
        msg = err;
    }
    res.type('text/plain');
    res.status(500);
    res.send(msg);
};
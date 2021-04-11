/*
Title: Exercise 4.2
Author: Travis Rosen
Date: 4/11/2021
Description: JavaScript page for 4.2
*/

//Require statements for express, http, logger and path.
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.get('/customer/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);

    res.json({
        firstName: 'Travis',
        lastName: 'Rosen',
        employeeId: id
    });
});

http.createServer(app).listen(8080, function(){
    console.log('Application started and running on port 8080.')
});
/*
Title: Exercise 3.2
Author: Travis Rosen
Date: 4/3/2021
Description: JavaScript page for 3.2
*/

//Require statements for express, http, and path.
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

//Telling express to look in the views folder for any files. 
app.set('views', path.resolve(__dirname, 'views'));
//Telling express to use the ejs view engine.
app.set('view engine', 'ejs');
//Adding the logger.
app.use(logger('dev'));
//Using a get request to return a response.
app.get('/', function(req, res) {
    res.render('index', {
        message: 'Where was Gondor when Westfold fell?'
    });
});
//Creates server to listen on port 8080.
http.createServer(app).listen(8080, function() {
    console.log('Application started and listening on port %s', 8080);
});

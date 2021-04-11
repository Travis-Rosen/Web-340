/*
Title: Exercise 4.2
Author: Travis Rosen
Date: 4/11/2021
Description: JavaScript page for 4.3
*/

//Require statements for express, http, and logger.
var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
//Get requests, displaying messages. 

//404 
app.get('/not-found', function(req, res){

    res.status(404);
    //Message that will be displayed. 
    res.json({
        error: 'Resource is no where to be seen.'
    });
});
//200
app.get('/ok', function(req, res){
    res.status(200);
    //Message that will be displayed. 
    res.json({
        error: 'Page loaded perfectly.'
    });
});
//501
app.get('/not-implemented', function(req, res){
    res.status(501);
    //Message that will be displayed.
    res.json({
        error: 'Page not functioning'
    });
});
//Creating server.
http.createServer(app).listen(3000, function(){
    console.log('Application started and running on port 3000');
});
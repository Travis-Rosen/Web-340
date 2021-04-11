/*
Title: Assignment 4.4
Author: Travis Rosen
Date: 4/11/2021
Description: JavaScript page for 4.4
*/

//Require statements for express, http, and logger.
var express = require('express');
var http = require('http');
var logger = require('morgan');
//Setting up the app;
var app = express();
app.set("port", process.env.PORT || 3000);
//Logger 
app.use(logger('dev'));
//Get request that will display message below.
app.get('/', function (req, res){
    res.send("API invoked as an HTTP GET request.");
});
//Put request that will display message below.
app.put('/', function (req, res){
    res.send("API invoked as an HTTP PUT request.");
});
//Post request that will display message below.
app.post('/', function (req, res){
    res.send("API invoked as an HTTP POST request.");
});
//Delete request that will display message below. 
app.delete('/', function (req, res){
    res.send("API invoked as an HTTP DELETE request.");
});
//Creating server to listen on. 
http.createServer(app).listen(app.get("port"), function(){
    console.log('Application has started and listening on port ${app.get("port")}');
});


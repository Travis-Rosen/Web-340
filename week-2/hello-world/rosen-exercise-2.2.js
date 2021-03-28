/*
Title: Exercise 2.2
Author: Travis Rosen
Date: 3/28/2021
Description: Setting up a node server and running tests to make sure it is correctly working.
*/

//Require statement for express library.
var express = require("express");
//Require statement for http that is the library to start server
var http = require('http');
//Placeholder for the Express app. 
var app = express();

app.use(function(req, res)
{
    //Function that will log message that will return a value. 
    console.log("In comes a request to: %s", req.url);
    res.end("Hello World\n");
})
//This will create a new server and output a message that the application has started. 
http.createServer(app).listen(8080, function()
{
    console.log("Application started on port %s")
});
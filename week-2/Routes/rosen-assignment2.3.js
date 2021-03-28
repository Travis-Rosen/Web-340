/*
Title: Exercise 2.3
Author: Travis Rosen
Date: 3/28/2021
Description: Express application that displays how to create routes and intercept routes. 
*/

// Statments for express and http library.
var express = require("express");
var http = require("http");
//Placeholder for Express application.
var app = express();

// Routes section; This will intercept requests and output responses.  

//This is the response text outputted when user is on the server.
app.get("/", function(req, res){
    res.end("Welcome to the homepage.\n");
});
//This is the response text outputted when user is on the /about page.
app.get("/about", function (req, res){
    res.end ("Welcome to the about page,\n");
});
//This is the response text outputted when user is on the /contact page. 
app.get ("/contact", function (req, res){
    res.end ("Welcome to the contact page.\n");
});
//This is the handler that intercepts requests that are not connected to the server, and will display the outputted message. 
app.use(function (req, res){
    res.statusCode = 404;
    res.end('404!\n');
});

//This creates our node server. 
http.createServer(app).listen(3000, function(){
    console.log("Application started on port %s", 3000);
});

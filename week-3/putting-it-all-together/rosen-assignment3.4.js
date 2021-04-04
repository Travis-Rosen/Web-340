/*
Title: Assignment 3.4
Author: Travis Rosen
Date: 4/3/2021
Description: JavaScript page for 3.4
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

//Using a get request for the home page.
app.get('/', function(req, res){
    res.render('index', {
        message: "home page"
    });
});
//Using a get request for the about page.
app.get('/about', function(req, res){
    res.render('about', {
        message: "about page"
    });
});
//Using a get request for the contact page.
app.get('/contact', function(req, res){
    res.render('contact', {
        message: "contact page"
    });
});
//Using a get request for the products page. 
app.get('/products', function(req, res){
    res.render('products', {
        message: "products page"
    });
});
//Creates server to listen on port 8080.
http.createServer(app).listen(8080, function (){
    console.log("Application has started on port %s", 8080);
});



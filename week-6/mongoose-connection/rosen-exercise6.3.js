
/*
Title: rosen-exercise6.3.js
Author: Travis Rosen
Date: 4/25/2021
Description: JavaScript server file for 6.3.
*/

//Require statements for express, http, mongoose, and morgan logger. 
var express = require('express');
var http = require('http');
var mongoose = require('mongoose')
var logger = require('morgan');
//Connecting to the mongo client.
var mongoDB = 'mongodb+srv://tmrosen:tmrosen@buwebdev-cluster-1.azoni.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
//Promise, database variable; give messages/error messages to console. 
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mMongoDB connection error'));
db.once('open', function() {
    console.log('Application connected to mLab');
});
//App variable
var app = express();
app.use(logger('dev'));
//Connecting to server.
http.createServer(app).listen(8080, function (){
    console.log('Application started on port 8080');
});
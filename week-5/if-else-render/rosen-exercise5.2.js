//Require statements for express, http, and path
var express = require('express');
var http = require('http');
var path = require('path');

//Application functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Array for the composers
var composers = 
[
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi",
];

//Routing get requests for composer names
app.get('/', function(req, res) {
    res.render('index', {
        names: composers
    });
});

//Creating Server
http.createServer(app).listen(8080, function() {
    console.log('Application has started on port 8080');
});
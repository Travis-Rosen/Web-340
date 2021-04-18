//Require Statements for express,
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

//Application functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//Routing, get request that will display message
app.get('/', function(req, res) {
    res.render('index', {
        message: 'A wizard is never late, nor is he early. He arrives precisely when he means to -Gandalf'
    });
});
//Creating Server
http.createServer(app).listen(8080, function(){
    console.log('Application has started on port 8080.')
});
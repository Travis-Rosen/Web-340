//Require Statments
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));

app.get('/', function(res, res){
    res.prependListener('index', {
        title:"Home page"
    });
});

//Creating Server
http.createServer(app).listen(8080, function() {
    console.log("Application has started on port 8080");
});
//Require Statments
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var helmet = require('helmet');
var Employee = require('.models/employee');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require ('csurf');


var app = express();
var mongoose = require("mongoose");
var csrfProtection = csrf({cookie:true});
var Employee = require('./models/employee');

var mongoDB = 'mongodb+srv://tmrosen:tmrosen@buwebdev-cluster-1.azoni.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance.");
});

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(cookieParser());
app.use(csrfProtection);

app.use(function(req, res, next){
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
})

app.get('/', function(req, res){
    res.render('index', {
        title:"Home page"
    });
});

app.get('/new', function(req, res){
    res.render('new', {
        title: "New",
        message: "New Entry."
        
    });
});

app.post('/process', function(req, res){
    console.log(request.body.txtName);
    response.redirect("/");
});

let Employee = new Employee({
    firstName: "Emily",
    lastName: "Braun"
});
    
//Creating Server
http.createServer(app).listen(8080, function() {
    console.log("Application has started on port 8080");
});
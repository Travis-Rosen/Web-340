//Require Statments
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var helmet = require('helmet');
var Employee = require('./models/employees');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require ('csurf');
var mongoose = require("mongoose");

//App statements
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));
app.set('port', process.env.PORT || 8080);
app.use(helmet.xssFilter());
//Csrf 
var csrfProtection = csrf({cookie:true});

app.use(bodyParser.urlencoded({
    extended:true
}));
//app.use
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});
//Get function
app.get("/", function(req, res) {
    res.render("index", {
        message: "XSS Prevention Example"
    });
});

//Creating mongo instance
const mongoDB = 'mongodb+srv://tmrosen:tmrosen@buwebdev-cluster-1.azoni.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance.");
});


//Get function for homepage
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page"
    });
});
//Entry page for new employee
app.get('/new', function(req, res){
    res.render("new", {
        title: "New Entry",
        message: "Enter your first and last name."
        
    });
});
//Process request
app.post("/process", function(req, res) {
    if (!req.body.firstName) {
        res.status(404).send('Entries must have a name.');
        return;
    }

    if (!req.body.lastName) {
        res.status(404).send("You must have a last name.");
        return;
    }

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    var employee = new Employee({
        firstName: firstName,
        lastName: lastName
    });

    employee.save(function(err) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(firstName + lastName + "Your Entry is Saved!");
            res.redirect('/');
        }
    });
});

//Listing display
app.get("/list", function(req, res) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;
        res.render("list", {
            title: "Employee List",
            employees: employees
        });
    });
});

app.get("/view/:queryName", function(request, response) {
    var queryName = request.params.queryName;
  
    Employee.find({'firstName': queryName}, function(error, employees) {
        if (error) throw error;
        if (employees.length > 0) {
            response.render("view", {
                title: 'EMS | View',
                employee: employees
            })
        }
        else {
          response.redirect('/list');
        }
    });
  });


    
//Creating Server
http.createServer(app).listen(app.get("port"), function() {
    console.log("Application has started and listenting on port %s", + app.get("port"))
});
//Require statements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Defining the employeeSchema. (First and Last Name)
var employeeSchema = new Schema({
    firstName:String,
    lastName: String
});

//Defining the model
var Employee = mongoose.model("Employee", employeeSchema);

//Exporting module.
module.exports = Employee;

//Require statements for express, http, mongoose, and morgan.
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var logger = require("morgan");
var Employee = require("./models/employees");

//Connection to mongoDB
var mongoDB = 'mongodb+srv://tmrosen:tmrosen@buwebdev-cluster-1.azoni.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
//Message and errors
mongoose.Promise = global.Promise;
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance.");
});
//Defining express app and logger.
var app = express();
app.use(logger('short'));
//Defining new Employee.
var Employee = new Employee({
    firstName: "Emily",
    lastName: "Braun"
});
//Creating server.
http.createServer(app).listen(8080, function(){
    console.log("Applications connected and running on port 8080.")
});
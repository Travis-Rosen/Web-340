/*
Title: Exercise 2.4
Author: Travis Rosen
Date: 3/28/2021
Description: This page will access EJS files and display them on a node server.
*/

//Require statements for express, http, and path.
var express = require("express");
var http = require("http");
var path = require("path");

var app = express ();

//This will tell Express that the views are in the "views" directory.
app.set("views", path.resolve(__dirname, "views"));
//This will tell Express to use the EJS view engine. 
app.set("view engine", "ejs");
//This is the data that will be pulled from the EJS page.
app.get("/", function(req, res){
    res.render("index.ejs", {
        firstName: "Travis",
        lastName: "Rosen",
        address: "3434 Soccer Road"
        
    });
});
//This will create the server on localhost:8080
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});



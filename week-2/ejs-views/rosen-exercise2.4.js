/*
Title: Exercise 2.4
Author: Travis Rosen
Date: 3/28/2021
Description: 
*/

var express = require("express");
var http = require("http");
var path = require("path");

var app = express ();

//This will tell Express that the views are in the "views" directory.
app.set("views", path.resolve(__dirname, "views"));
//This will tell Express to use the EJS view engine. 
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index.ejs", {
        firstName: "Travis",
        lastName: "Rosen",
        address: "3434 Soccer Road"
        
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});



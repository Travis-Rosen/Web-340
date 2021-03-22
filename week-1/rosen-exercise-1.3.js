/*
Title: Exercise 1.3
Author: Travis Rosen
Date: 3/21/2021
Description: Node.js program that will log the protocol, host, and query of the url inputted.
*/

//Defining the variable to containe the parsed url. 
var url = require("url")

var parsedURL = url.parse("https://www.examplesite.com/profile?name=rosen");
//Parsing will log the protocol, host, and query of the url above. 
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

/*
Title: Exercise 1.5
Author: Travis Rosen
Date: 3/21/2021
Description: 
*/


var http = require("http");
//This processRequest function will generate the request and the response.
function processRequest(req, res) {
    //This is the text that will be displayed on the server.
    var body = "One ring to rule them all, one ring to find them, One ring to bring them all, and in the darkness bind them; In the Land of Mordor where the shadows lie.";
    //This will count the char. 
    var contentLength = body.length;
    //Respond to browser, and will display the body text above.
    res.writeHead(200, {
        "Content-Length": contentLength,
        "Content-Type": 'text/plain'
    })

    res.end(body);

}
//Varaible that will define the server and function/ 
var s = http.createServer(processRequest);
//Displaying the s varaible to localhost 8080. 
s.listen(8080);
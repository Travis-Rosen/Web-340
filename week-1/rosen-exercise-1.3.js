var url = require("url")

var parsedURL = url.parse("https://www.examplesite.com/profile?name=rosen");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// get the http module:
var http = require('http');

// fs module allows us to read and write content for responses!!
var fs = require('fs');

// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname));
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})
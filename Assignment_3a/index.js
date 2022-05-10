var http = require('http'); // Import Node.js core module
let express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        fs.createReadStream(path.resolve(__dirname, 'template/index.html')) 
    .pipe(res);
    
    }
    else if (req.url == "/admin?") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.resolve(__dirname, 'template/admin.html')) 
        .pipe(res);
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(3000); //6 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')
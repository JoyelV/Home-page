// How to create a server

const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('Hello world');
}).listen(8080);
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
 
http.createServer(app).listen(80);
 
app.get('/',function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("port 80");
	
});

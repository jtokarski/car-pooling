var http = require('http');
var https = require('https');
var fs = require('fs');
var app = require('./app');

var port = process.env.PORT || 4080;
var port2 = process.env.PORT || 4443;
var privateKey = fs.readFileSync('security/server.key').toString();
var certificate = fs.readFileSync('security/server.crt').toString();
var options = {key:privateKey , cert:certificate};

http.createServer(app).listen(port, function () {
    console.log("Express server listening on " + port);
});

https.createServer(options, app).listen(port2, function () {
    console.log("Express server listening with ssl on " + port2);
});

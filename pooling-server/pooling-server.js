var http = require('http');

var port = process.env.PORT || 4000;
var server = http.createServer(require('./app'))
server.listen(port, function () {
    console.log("Express server listening on " + port);
});

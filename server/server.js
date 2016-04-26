var express = require('express');
var app = express();
var server = require('http').createServer(app);

var port = process.env.PORT || 3000;

require('./middleware.js')(app, express);
// app.use(function(req, res) {

//   var data = __dirname + '/../client';
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(data);

// });


server.listen(port);

console.log("server is running : ", port );

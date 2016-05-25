var app = require('./serverConfig.js');
var server = require('http').createServer(app);

console.log("Starting up the server");
var PORT = process.env.PORT || 3000;



server.listen(PORT);
console.log("Server is now running at PORT:", PORT );

var express = require('express');
var app = require('./serverConfig.js');
var server = require('http').createServer(app);
console.log("Starting up the server");
var PORT = process.env.PORT || 3000;

    // if you want specific fields to be required or uniquie, you put them in an obj
    // and then key the feilds
    // name : {
    //     type: string,
    //     require: true
    // }

// require('./middleware.js')(app, express);

server.listen(PORT);

console.log("Server is now running at PORT:", PORT );

var express = require('express');
var app = express();
var db = require('./db.js');

console.log("Aquiring the express server");
require('./middleware.js')(app, express);

module.exports = app;

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

// mongo db is currently setupf or local, change in future use
// for local dev, use 'mongod://localhost/' + __current or new db__
// a new db will be created if it does not exist
var db = mongoose.connect('mongodb://localhost/TeamUpCosplay');

var TestSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});
// we are now accessing the 'TeamUpCosplay' db, and now we refrence the collection want as the first arg
// if there is a second param, its assumed that it is a schema
// without the second arg, it will assume its a refrence to the db collection
var Testing = mongoose.model('localTest', TestSchema);
Testing.create({
    name:'JOHN',
    completed: true
}).then(function(err, test){
    console.log('IT WORKED', err, todo);
})

    // if you want specific fields to be required or uniquie, you put them in an obj
    // and then key the feilds
    // name : {
    //     type: string,
    //     require: true
    // }



require('./middleware.js')(app, express);
// app.use(function(req, res) {

//   var data = __dirname + '/../client';
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(data);

// });


server.listen(port);

console.log("server is running : ", port );

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/TeamUpCosplay');
console.log("Connecting to the Mongo DB");
// mongo db is currently setupf or local, change in future use
// for local dev, use 'mongod://localhost/' + __current or new db__
// a new db will be created if it does not exist

// var TestSchema = new mongoose.Schema({
//     name: String,
//     completed: Boolean
// });
// // we are now accessing the 'TeamUpCosplay' db, and now we refrence the collection want as the first arg
// // if there is a second param, its assumed that it is a schema
// // without the second arg, it will assume its a refrence to the db collection
// var Testing = mongoose.model('localTest', TestSchema);
// Testing.create({
//     name:'JOHN',
//     completed: true
// }).then(function(err, test){
//     console.log('IT WORKED', err, todo);
// })

module.exports = db;

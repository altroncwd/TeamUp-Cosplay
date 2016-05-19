var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
    when we require our models elsewhere, we save thigns via
    1). we create the var object with the models
        var dog = new Dog( {
            name : 'Oreo'
        });
    then we have to save it
        dog.save(function(err, savedDog) {
            if (err) {
                next (err)
            } else {
                res.json(savedDog);
            }
        })
        
    2). create the new model and save at the same time ********
        Dog.create({name: 'Oreo'}, function (err, savedDog) {
            ^ same error handling as before
        })    
    
    3).  ewww method
        var dog = new Dog();
        dog.name = 'Oreo';
        dog.save(funciton(err, savedDog) {
            ^ same error handling as before
        })
        
        
    Can use exports.__name__ for multpile schema if I dont want to break these schema up into separate files
*/

var Materials = new Schema({
    image : { type: string, required : true },  // revist this for how i store images...
    cost : string,
    location : string,
    link : string,
    weight : string,
});


// var Materials = function (image, cost, location, link, weight) {
//   this.image = image;     // figure out how to store images for this to work
//   this.cost = cost;
//   this.location = location;
//   this.link = link;
//   this.weight = weight;
// }
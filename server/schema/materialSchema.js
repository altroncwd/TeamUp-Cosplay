var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
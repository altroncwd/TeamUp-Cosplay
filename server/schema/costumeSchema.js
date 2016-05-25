var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Image    = require('./refrencePictureSchema.js');
var Parts    = require('./costumePartsSchema.js');

var CostumeSchema = new Schema ({
    character : { type : String,  required : true},
    refrenceImages : [ Image ],   // revisit me for storaing images...
    partsOfCostume : { parts : [ Parts ]}
})

module.exports = mongoose.model('Costume', CostumeSchema)

// var Costumes = function (character, image) {
//   this.character = character;
//   this.refrenceImages = [image];    // figure out how to store images for this to work
//   this.partsOfCostume = [];
// }

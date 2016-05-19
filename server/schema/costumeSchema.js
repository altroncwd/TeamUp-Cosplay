var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CostumeSchema = new Schema ({
    character : { type : string,  required : true},
    refrenceImages : { images : [ any ]},   // revisit me for storaing images...
    partsOfCostume : { parts : [ Parts ]}
})

module.exports = mongoose.model('Costume', CostumeSchema)

// var Costumes = function (character, image) {
//   this.character = character;
//   this.refrenceImages = [image];    // figure out how to store images for this to work
//   this.partsOfCostume = [];
// }
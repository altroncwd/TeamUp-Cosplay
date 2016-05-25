var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var Materials = require('./materialSchema.js');

var CostumePartsSchema = new Schema ({
   part : { type : String,  required : true},
   notes : String,
   materialOptions : { materials : [ Materials ]},
   partsImageRefrences : Object    // revisit this later
});

module.exports = mongoose.model ('CostumeParts', CostumePartsSchema );

// var CostumeParts = function (part, notes) {
//   this.part = part;
//   this.notes = notes;
//   this.materialOptions = [];
//   this.partsImageRefrences = [];    // should refrence tagged sections from the partsOfCostume list... Somehow
// }

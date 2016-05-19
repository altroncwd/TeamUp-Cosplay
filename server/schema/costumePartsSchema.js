var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CostumePartsSchema = new Schema ({
   part : { type : string,  required : true},
   notes : string,
   materialOptions : { materials : [ Materials ]},
   partsImageRefrences : { any: {} }    // revisit this later 
});

module.exports = mongoose.model ('CostumeParts', CostumePartsSchema );

// var CostumeParts = function (part, notes) {
//   this.part = part;
//   this.notes = notes;
//   this.materialOptions = [];
//   this.partsImageRefrences = [];    // should refrence tagged sections from the partsOfCostume list... Somehow
// }
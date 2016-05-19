var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MemberSchema = new Schema ({
   generatedKey : { type : string,  required : true},
   userName : String 
});

module.exports = mongoose.model ('Member', MemberSchema );


// random key is a function for producing a random hash key for members, look to the helper function file for more details
// var Member = function () {
//   this[randomKey()] = undefined;
// }
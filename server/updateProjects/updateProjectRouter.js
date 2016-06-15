var projectSchema         = require('../schema/projectSchema.js');
var memberSchema          = require('../schema/memberSchema.js');
var costumeSchema         = require('../schema/costumeSchema.js');
var costumePartsSchema    = require('../schema/costumePartsSchema.js');
var materialSchema        = require('../schema/materialSchema.js');
var refrencePictureSchema = require('../schema/refrencePictureSchema.js');

console.log("Project Router");

module.exports = {
  updateProject: function (req, res, next) {
  },

  updateNewMember : function (req, res, next) {
    //should only update the member list
  },

  updateCostume : function (req, res, next) {
    //should only update the costumes
  },

  updateCostumeParts : function (req, res, next) {
    //should update parts of the costume
  },

  updateMaterial : function (req, res, next) {
    //should update the materials
  },

  updateRefrencePicture : function (req, res, next) {
    //should update the images... TBD
  }
}

/*
Basic way to update in the mongo shell
>  db.__collection__.update({ _Key_ : _Value_}, { _newKeys : _newValues_});
Note:
  Doing this method will replace the whole collection with what you put in.  Its very error prone as you are unlikely to remember all the fields there were previously

>  db.__collection__.update({ _Key_ : _Value_}, { $set : { _newKeys : _newValues_}} );
Note:
  Doing it this way will update ONLY the existing keys that match the updated values
  (DOES NOT~ require key to exist for it to be updated)

*/


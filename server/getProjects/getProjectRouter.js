var Project         = require('../schema/projectSchema.js');
var Member          = require('../schema/memberSchema.js');
var Costume         = require('../schema/costumeSchema.js');
var CostumeParts    = require('../schema/costumePartsSchema.js');
var Material        = require('../schema/materialSchema.js');
var RefrencePicture = require('../schema/refrencePictureSchema.js');

console.log("Project Router");


module.exports = {
  getProject : function (req, res, next) {
    // should return the project you need
    console.log('we are looking for : ', req.params.project);
    var nameOfProject = req.params.project;
    Project.find({projectName: nameOfProject}, function (err, data){
        console.log("---", data[0]);
        // var project = {};

        // Cant seem to get my data back here for whatever reason
        // I can log it and its there but It cant seem to be returned

        // res.send(data[0]);
        res.json(data[0]); // why do you work...
    });

  },

  getMember : function () {

  },

  getCostume : function () {

  },

  getCostumeParts : function () {

  },

  getMaterial : function () {

  },

  getRefrencePicture : function () {

  }
}


//   app.get('/project/:projectName', function(req, res) {
//     console.log("I'm Working :D");
//     var project = req.params.projectName;

//     // res.send([project]);

//   })

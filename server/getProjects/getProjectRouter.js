var Project         = require('../schema/projectSchema.js');
var Member          = require('../schema/memberSchema.js');
var Costume         = require('../schema/costumeSchema.js');
var CostumeParts    = require('../schema/costumePartsSchema.js');
var Material        = require('../schema/materialSchema.js');
var RefrencePicture = require('../schema/refrencePictureSchema.js');


module.exports = {
  getAllProjects : function (req, res, next) {
    Project.find({}, function (err, allProjects) {
      if(err) {
        res.status(404).send("Woops", console.dir(err));
      } else {
        res.status(200).send(allProjects);
      }
    })
  },

  getProjectByName : function (req, res, next) {
    // should return the project you need
    console.log('we are looking for : ', req.params.project);
    var nameOfProject = req.params.project;
    Project.find({projectName: nameOfProject}, function (err, data){

      // have something for edge cases of not finding a project but its not an error
        console.log("---", data);
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

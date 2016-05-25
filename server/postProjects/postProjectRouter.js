var projectSchema         = require('../schema/projectSchema.js');
var memberSchema          = require('../schema/memberSchema.js');
var costumeSchema         = require('../schema/costumeSchema.js');
var costumePartsSchema    = require('../schema/costumePartsSchema.js');
var materialSchema        = require('../schema/materialSchema.js');
var refrencePictureSchema = require('../schema/refrencePictureSchema.js');

console.log("Project Router");

module.exports = {
  addProject : function (req, res, next) {
    // should create a new project with a project name, owner/creator, and date created.
    console.log("in the addProjectMethod");
    var projectInfo = req.body;
    console.log(projectInfo);
    var newProject = new projectSchema({
      projectName : projectInfo.projectName,
      projectOwner : projectInfo.projectOwner,
      ProjectCreated : Date(),
    });

    newProject.save()
      .then (function (data) {
        // data is the saved project returned, so you can get __id
        res.status(200).send("Project Saved", data);
      })
      .catch (function(err) {
        res.status(400).send("Project Couldn't Saved");
        next(err);
      })

    // res.status(200).send("Awesome++");

    // optional information can include project deadline, deadline date
  },

  addMember : function (req, res, next) {
    // should create a key for a new member to use to join.
    // Thoughts: create a hash key with the value undefined, when users search for the project and pass in the hash, if the hash is present & value undefined, useres will be prompted to enter a "user name" which will be set.

    // login would later be by project and just "username"
  },

  addCostume : function (req, res, next) {
    // should add a costume with a name, and one reference image.
    // Optional information can include notes
  },

  addCostumeParts : function (req, res, next) {
    // will add parts to a costume
  },

  addMaterial : function (req, res, next) {
    // will add materials to a costume part which must contain a picture
    // optional information include price, location, link, weight

    // Future??  have an option for adding the same information to multiple parts
  },

  addRefrencePicture : function (req, res, next) {
    // will add refrnece images to a costume
  }
}

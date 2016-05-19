var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema ({
        project : {
            type : string,
            unique : true,
            required : true
        },
        projectOwner : {
            type : string,
            required: true
        },
        projectMembers = {member : [ Member ]},    // Double check me, is ther a way to just make an hash conatiner for members, or do i need to use an array
        eventDeadline : string,
        eventDeadlineDate: string,      // Check me later, specific date property?
        projectCrated: string,          // dito
        costumes : {
        costume : [ Costume ]   // this should allow an array only propogated with the Costume Schema
        },                // Dont understand the array?
        lastLoggedIn : string,  
});


// var Project = function (projectName, projectOwner, eventDeadline, eventDeadlineDate, date) {
//   this.projectName = projectName;
//   this.projectOwner = projectOwner;
//   this.projectMembers = {
//     owner : projectOwner
//   };
//   this.eventDeadline = eventDeadline;
//   this.eventDeadlineDate = eventDeadlineDate;
//   this.projectCreated = date;
//   this.costumes = [];
//   this.lastLoggedIn = undefined;
// };

var Member = new Schema ({
   generatedKey : { type : string,  required : true},
   userName : String 
});

// var Member = function () {
//   this[randomKey()] = undefined;
// }

var Costume = new Schema ({
    character : { type : string,  required : true},
    refrenceImages : { images : [ Images ]},
    partsOfCostume : { parts : [ Parts ]}
})

// var Costumes = function (character, image) {
//   this.character = character;
//   this.refrenceImages = [image];    // figure out how to store images for this to work
//   this.partsOfCostume = [];
// }

var CostumeParts = new Schema ({
   part : { type : string,  required : true},
   notes : string,
   materialOptions : { materials : [ Materials ]},
   partsImageRefrences : { any: {} }    // revisit this later 
});

// var CostumeParts = function (part, notes) {
//   this.part = part;
//   this.notes = notes;
//   this.materialOptions = [];
//   this.partsImageRefrences = [];    // should refrence tagged sections from the partsOfCostume list... Somehow
// }

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
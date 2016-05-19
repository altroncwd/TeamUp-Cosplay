var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = new Schema ({
        project : {
            type : string,
            unique : true,
            required : true
        },
        // projectOwner : {         // Going to remove projectOwner, in favor of having that in the projectMembers as a key, along side the existing array of other memebers
        //     type : string,
        //     required: true
        // },
        projectMembers = {
            owner : { type : string, required : true },
            member : [ Member ]
        },    // Double check me, is ther a way to just make an hash conatiner for members, or do i need to use an array
        eventDeadline : string,
        eventDeadlineDate: string,      // Check me later, specific date property?
        projectCrated: string,          // dito
        costumes : {
            costume : [ Costume ]   // this should allow an array only propogated with the Costume Schema
        },                // Dont understand the array?
        lastLoggedIn : string,  
});

module.exports = mongoose.model('Project', ProjectSchema );


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
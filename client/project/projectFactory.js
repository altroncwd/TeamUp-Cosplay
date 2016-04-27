angular.module('meetup.project.factory', [])
  .factory('ProjectFactory', ['$state', function ($state) {
// the factory should store data

  // var project = {};

// TEMP TEST DATA: -----------------------------------
  var project = {
    projectName: "Owari Test",
    projectDeadline : "AnimeExpo",
    projectDeadlineDate: "7/1/16"
  };
// ---------------------------------------------------


// should also store logic for retreiving/adding data to source

// should return an object with methods and refrence to data

return {
  project : project
}

  }]);

//----------- PROJECT SCHEMA -----------




angular.module('meetup.project.factory', [])
  .factory('ProjectFactory', ['$state', '$stateParams', '$http', '$q', function ($state, $stateParams, $http, $q) {
// the factory should store data
  var project = {};

  // LOGIC :
  // Have a check on the stateParam, if the project is diffrent then whats loaded, run the function again to get the appropriate project, otherwise dont do the get request.

  var getProject = function () {
      $http({
        method: 'GET',
        url: '/project/' + $stateParams.project
      }). then(function(response) {
        // console.log("RESPONSE : ", response);
        project = response.data;
        console.log(project);
      }, function (err) {
        // error err
      })
    }
    // Need to resolve the update and have angular properly display info.

  if( project == undefined || project.projectName !== $stateParams.project){
    getProject();
  }

// TEMP TEST DATA: -----------------------------------
  // var project = {
  //   projectName : 'Owari no Sereph' ,
  //   projectOwner : 'Chris',
  //   projectMembers : {
  //     owner : 'Chris',
  //     as7g6d78g9 : 'John'
  //   },
  //   eventDeadline : "AnimeExpo",
  //   eventDeadlineDate : "7/1/16",
  //   projectCreated : Date(),
  //   costumes : [
  //     { character : 'Guren',
  //       refrenceImages : ['oneitem'],
  //       partsOfCostume : [
  //         { part: 'jacket',
  //           notes: 'needs to be cool',
  //           materialOptions : [
  //             { image : 'http://google.com',
  //               cost : 34,
  //               location : 'Britex',
  //               link : undefined,
  //               weight : 'medium'
  //             }
  //           ],
  //           partsImageRefrence : []
  //         },
  //         { part: 'pants',
  //           notes: 'needs to be light and cool',
  //           materialOptions : [
  //             { image : 'http://google.com',
  //               cost : 34,
  //               location : 'Britex',
  //               link : undefined,
  //               weight : 'medium'
  //             }
  //           ],
  //           partsImageRefrence : []
  //         }
  //       ],
  //     },
  //     { character : 'Ferid',
  //       refrenceImages : [],
  //       partsOfCostume : [
  //         { part: 'cloak',
  //           notes: 'needs to be fab',
  //           materialOptions : [
  //             { image : 'http://google.com',
  //               cost : 20,
  //               location : 'Britex',
  //               link : undefined,
  //               weight : 'light'
  //             }
  //           ],
  //           partsImageRefrence : []
  //         }
  //       ],
  //     }
  //   ],
  //   lastLoggedIn : undefined
  // }
// ---------------------------------------------------


//Rewrite this later, I can just use angular repete index position to refrence the costume.

// should also store logic for retreiving/adding data to source
var currentCostume = function (charName) {
  console.log('looking for : ', charName);
  var list = project.costumes;
  for(var i = 0; i < list.length; i++) {
      console.log(list[i].character);
      if (list[i].character === charName) {
        console.log('found it');
        return list[i];
      }
    }
  // edge case we find nothing so we can redirect
  return null;
}


// should return an object with methods and refrence to data

return {
  project : project,
  currentCostume : currentCostume
}

  }]);

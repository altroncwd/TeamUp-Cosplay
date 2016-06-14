angular.module('meetup.project.factory', [])
  .factory('ProjectFactory', ['$state', '$stateParams', '$http', '$q', function ($state, $stateParams, $http, $q) {
// the factory should store data
  var project = {};

  // LOGIC :
  // Have a check on the stateParam, if the project is diffrent then whats loaded, run the function again to get the appropriate project, otherwise dont do the get request.


  // need to get my project back, then set my the factory project to the return  (the project var refrence is returned by this factory to the controller)
  // after the return I cant tell if its messing up mid way or of my controller/factory is not being updated on the client side.
  var getProject = function () {
      $http.get('/project/' + $stateParams.project)
        .then (function (data) {
          return data;
        }, function (error){
          console.dir(error);
        })
        .then (function(response){
          console.log('second response : ',response.data);
          project = response.data;
        })
    }

  // var getProject = function () {
  //     $http.get('/project/' + $stateParams.project)
  //       .then(function(response, status, headers, config) {
  //         // console.log("RESPONSE : ", response);
  //         project = response.data;
  //         console.log(project);
  //       }, function (err) {
  //       // error err
  //     })
  //   }
    // Need to resolve the update and have angular properly display info.

  if( project == undefined || project.projectName !== $stateParams.project){
    getProject();
  }




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

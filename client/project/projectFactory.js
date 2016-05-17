angular.module('meetup.project.factory', [])
  .factory('ProjectFactory', ['$state', '$stateParams', function ($state, $stateParams) {
// the factory should store data

  var project = {};

  // LOGIC :
  // Have a check on the stateParam, if the project is diffrent then whats loaded, run the function again to get the appropriate project, otherwise dont do the get request.
  console.log("I'm in the factory : ", $stateParams.project)
  var getProject = function () {
      console.log("I'm in the factory");
      projectGet = '/project/' + this.project;
      $http({
        method: 'GET',
        url: projectGet
      }). then(function(res) {
        // remember res is the whole response, including the 400, the data property is what we actualy want/get back
        project = res.data;
      })
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

//----------- PROJECT SCHEMA -----------

// { projectName = 'Owari no Sereph' ,
//   projectOwner = 'Chris',
//   projectMembers = {
//     owner : 'Chris',
//     as7g6d78g9 : 'John'
//   }
//   eventDeadline = "AnimeExpo",
//   eventDeadlineDate = "7/1/16",
//   projectCreated = Date(),
//   costumes = [
//     { character : 'Guren',
//       refrenceImages : [],
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
//   ];
//   lastLoggedIn = undefined;
// }



angular.module('meetup.project.factory', [])
  .factory('ProjectFactory', ['$state', '$firebase', function ($state, $firebase) {
// the factory should store data

  // var project = {};
 var url = 'https://teamupcp.firebaseio.com/project/Owari';
 var ref = new Firebase (url);

 var project;

 ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   project = snapshot.val();
 }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
 });



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
  //   ],
  //   lastLoggedIn : undefined
  // }
// ---------------------------------------------------


// should also store logic for retreiving/adding data to source

// should return an object with methods and refrence to data

return {
  project : project
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



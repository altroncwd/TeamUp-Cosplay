angular
  .module('meetup.project', [])
  .controller('Project', ['$scope', '$firebase', '$stateParams', 'ProjectFactory', function ($scope, $firebase, $stateParams, ProjectFactory) {
    $scope.owner = ProjectFactory.project.owner;
    $scope.project = ProjectFactory.project.projectName;
    $scope.deadline = ProjectFactory.project.eventDeadline;
    $scope.deadlineDate = ProjectFactory.project.eventDeadlineDate;
    $scope.costumes = ProjectFactory.project.costumes;

    // $scope.project = "Owari No Serfeph";
    console.log('----- $stateParams ----- ', $stateParams);

    var url = 'https://brilliant-heat-2273.firebaseio.com/';
    var ref = new Firebase (url);

    ref.set('testing');
    $scope.data;
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      $scope.data = snapshot.val();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

  }]);

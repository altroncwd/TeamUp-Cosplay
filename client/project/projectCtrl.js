angular
  .module('meetup.project', [])
  .controller('Project', ['$scope', '$state', '$stateParams', 'ProjectFactory', function ($scope, $state, $stateParams, ProjectFactory) {
    $scope.owner = ProjectFactory.project.owner;
    $scope.project = ProjectFactory.project.projectName;
    $scope.deadline = ProjectFactory.project.eventDeadline;
    $scope.deadlineDate = ProjectFactory.project.eventDeadlineDate;
    $scope.costumes = ProjectFactory.project.costumes;

    // $scope.project = "Owari No Serfeph";
    console.log('----- $stateParams ----- ', $stateParams);

  }]);

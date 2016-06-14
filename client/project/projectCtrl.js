angular
  .module('meetup.project', [])
  .controller('Project', ['$scope', '$stateParams', 'ProjectFactory', '$http', function ($scope, $stateParams, ProjectFactory, $http) {
    $scope.projectOwner = ProjectFactory.project.projectOwner;
    $scope.projectName = ProjectFactory.project.projectName;
    $scope.deadline = ProjectFactory.project.eventDeadline;
    $scope.deadlineDate = ProjectFactory.project.eventDeadlineDate;
    $scope.costumes = ProjectFactory.project.costumes;

    console.log('----- $stateParams ----- ', $stateParams);


  }]);

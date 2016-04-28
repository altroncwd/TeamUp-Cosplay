angular
  .module('meetup.project', [])
  .controller('Project', ['$scope', 'ProjectFactory', function ($scope, ProjectFactory) {
    $scope.owner = ProjectFactory.project.owner;
    $scope.project = ProjectFactory.project.projectName;
    $scope.deadline = ProjectFactory.project.eventDeadline;
    $scope.deadlineDate = ProjectFactory.project.eventDeadlineDate;
    $scope.costumes = ProjectFactory.project.costumes;


  }]);

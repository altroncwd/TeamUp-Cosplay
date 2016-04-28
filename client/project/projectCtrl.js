angular
  .module('meetup.project', [])
  .controller('Project', ['$scope', 'ProjectFactory', function ($scope, ProjectFactory) {
    $scope.test = 'Project Controller refrence';

    $scope.project = ProjectFactory.project.projectName;
    $scope.deadline = ProjectFactory.project.eventDeadline;
    $scope.deadlineDate = ProjectFactory.project.eventDeadlineDate;

  }]);

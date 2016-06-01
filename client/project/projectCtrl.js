angular
  .module('meetup.project', [])
  .controller('Project', ['$scope', '$stateParams', 'ProjectFactory', '$http', function ($scope, $stateParams, ProjectFactory, $http) {
    $scope.projectOwner = ProjectFactory.project.owner;
    $scope.projectName = ProjectFactory.project.projectName;
    $scope.deadline = ProjectFactory.project.eventDeadline;
    $scope.deadlineDate = ProjectFactory.project.eventDeadlineDate;
    $scope.costumes = ProjectFactory.project.costumes;

    // $scope.project = "Owari No Serfeph";
    console.log('----- $stateParams ----- ', $stateParams);

    console.log(ProjectFactory);

    $scope.getTest = function () {
      console.log(this.project);
      projectGet = '/project/' + this.project;
      $http({
        method: 'GET',
        url: projectGet
      }). then(function(res) {
        console.log(res.data);
      })
    }

  }]);

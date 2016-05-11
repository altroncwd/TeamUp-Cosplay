angular
  .module('meetup.costume', [])
  .controller('Costume', ['$scope', '$stateParams', 'ProjectFactory', function ($scope, $stateParams, ProjectFactory) {
    $scope.test = 'INDIVIDUAL COSTUME PAGE';
    console.log('----- $stateParams ----- ', $stateParams);

    $scope.currentCostume = ProjectFactory.currentCostume($stateParams.costume);

    console.log('currentCostume : ', $scope.currentCostume);


}]);

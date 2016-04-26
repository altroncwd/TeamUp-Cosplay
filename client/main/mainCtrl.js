angular
  .module('meetup.about', [])
  .controller('About', ['$scope', function ($scope) {
    $scope.test = 'Just a controller refrence test';
  }]);

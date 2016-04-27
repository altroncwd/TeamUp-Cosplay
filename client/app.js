angular.module('meetup', [
  'ui.bootstrap',
  'ui.router',
  'ngAnimate',
  'meetup.about',
  'meetup.home',
  'meetup.project',
  'meetup.project.factory'
])
// see zibzoo for more exmpales of how it works
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('index', {
        templateUrl: 'home/home.html',
        url: '/',
        controller: 'Home'
      })
      .state('about', {
        templateUrl: 'main/mainView.html',
        url: '/about',
        controller: 'About'
      })
      .state('project', {
        templateUrl: 'project/project.html',
        url: '/project',
        controller: 'Project'
      })

      $urlRouterProvider.otherwise('/');

  })

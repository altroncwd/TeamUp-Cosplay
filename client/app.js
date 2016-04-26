angular.module('meetup', [
  'ui.bootstrap',
  'ui.router',
  'ngAnimate',
  'meetup.about',
  'meetup.home'
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

      $urlRouterProvider.otherwise('/');

  })

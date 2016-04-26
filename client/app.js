angular.module('meetup', [
  // 'ui.bootstrap',
  'mm.foundation',
  'ui.router',
  'ngAnimate',
  'meetup.about'
])
// see zibzoo for more exmpales of how it works
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('index', {
        templateUrl: 'main/mainView.html',
        url: '/',
        controller: 'About'
      })
      // .state('game', {
      //   templateUrl: 'gameroom/game.html',
      //   url: '/game',
      //   controller: 'Board'
      // })

      $urlRouterProvider.otherwise('/');

  })

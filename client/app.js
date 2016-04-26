angular.module('rts', [
  'ui.router',
  'ngAnimate',
  'rts.about',
  'rts.board.logic',
  'rts.board'
])
// see zibzoo for more exmpales of how it works
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('index', {
        templateUrl: 'main/mainView.html',
        url: '/',
        controller: 'About'
      })
      .state('game', {
        templateUrl: 'gameroom/game.html',
        url: '/game',
        controller: 'Board'
      })

      $urlRouterProvider.otherwise('/');

  })

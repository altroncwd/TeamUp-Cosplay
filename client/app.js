angular.module('meetup', [
  'ui.bootstrap',
  'ui.router',
  'ngAnimate',
  'firebase',
  'meetup.about',
  'meetup.home',
  'meetup.project',
  'meetup.project.factory',
  'meetup.costume'
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
        templateUrl: 'about/aboutView.html',
        url: '/about',
        controller: 'About'
      })

      .state('project', {
        templateUrl: 'project/project.html',
        url: '/project/:project',
        controller: 'Project'
      })
        .state('costume', {
          templateUrl: 'costume/costume.html',
          url: '/project/:project/:costume',
          controller: 'Costume'
        })

      $urlRouterProvider.otherwise('/');

  })

angular.module('Home', []);
angular.module('Contact', []);
angular.module('Base', ['ionic', 
  'Home',
  'Contact',
  'pascalprecht.translate'])

.config(['$translateProvider', function($translateProvider) {

  $translateProvider.useStaticFilesLoader({
    prefix: 'locale/',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage(navigator.language || navigator.userLanguage);
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/menu/menu.html'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController'
        }
      }
    })

    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'app/contact/contact.html',
          controller: 'ContactController'
        }
      }
    })
    ;

    $urlRouterProvider.otherwise('/app/home');
});
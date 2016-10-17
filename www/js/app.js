var helloWorld = angular.module('helloWorld', ['ui.router', 'helloWorld.controllers', 'ui.bootstrap']);

//this scrolls the page to the top on state change
helloWorld.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});


helloWorld.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
  .state('helloWorld', {
        abstract: true,
        views: {
            'header': {
                templateUrl: 'templates/header.html'
            }
        }
    })
    .state("helloWorld.home", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/home.html',
                controllers: 'appCtrl'
            }
        }
    });

    
    $urlRouterProvider.otherwise("/");
    
});
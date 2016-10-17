var sideMenu = angular.module('sideMenu', ['ui.router', 'sideMenu.controllers', 'ui.bootstrap']);

//this scrolls the page to the top on state change
sideMenu.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});


sideMenu.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
  .state('sideMenu', {
        abstract: true,
        views: {
            'header': {
                templateUrl: 'templates/header.html'
            }
        }
    })
    .state("sideMenu.home", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/home.html',
                controllers: 'appCtrl'
            }
        }
    })

    .state("sideMenu.about", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/about.html'
            }
        }
    })
    
    .state("sideMenu.services", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/services.html'
            }
        }
    })
    
    .state("sideMenu.clients", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/clients.html'
            }
        }
    })
    
    .state("sideMenu.contact", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/contact.html'
            }
        }
    });

    
    $urlRouterProvider.otherwise("/");
    
});
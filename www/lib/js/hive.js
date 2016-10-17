var helloWorld = angular.module('hive.controllers', []);

//controller to track which state is active so we can inject that into the header
helloWorld.controller("appCtrl", function($rootScope, $scope, $location) {
  $scope.openNav = function() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("hamburger").style.marginLeft = "250px";
  }

  $scope.closeNav = function() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.getElementById("hamburger").style.marginLeft= "0";
  }

  $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 
      // do something
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.getElementById("hamburger").style.marginLeft= "0";
  })
});
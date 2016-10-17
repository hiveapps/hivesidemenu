var helloWorld = angular.module('helloWorld.controllers', []);

//controller to track which state is active so we can inject that into the header
helloWorld.controller("appCtrl", function($scope, $location) {
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
});
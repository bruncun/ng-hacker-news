"use strict";

angular
  .module("myApp.topStories", ["ngRoute"])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "top-stories/top-stories.html",
        controller: "TopStoriesCtrl"
      });
    }
  ])
  .controller("TopStoriesCtrl", [
    "$scope",
    function($scope) {
      $scope.foo = "baz";
    }
  ]);

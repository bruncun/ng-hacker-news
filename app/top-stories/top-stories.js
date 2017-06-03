"use strict";

angular
  .module("hackerNews.topStories", ["ngRoute"])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "top-stories/top-stories.html",
        controller: "TopStoriesCtrl as topStoriesCtrl"
      });
    }
  ])
  .controller("TopStoriesCtrl", [
    "$scope",
    function($scope) {
      this.foo = "baz";
    }
  ]);

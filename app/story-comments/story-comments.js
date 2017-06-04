"use strict";

angular
  .module("hackerNews.storyComments", ["ngRoute"])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/post/:id", {
        templateUrl: "story-comments/story-comments.html",
        controller: "StoryCommentsCtrl as vm"
      });
    }
  ])
  .controller("StoryCommentsCtrl", [
    "$routeParams",
    function($routeParams, TopStoriesService) {
      var vm = this;
      vm.id = $routeParams.id;
    }
  ]);

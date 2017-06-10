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
    "TopStoriesService",
    function($routeParams, TopStoriesService) {
      var vm = this;
      vm.id;
      vm.story;
      vm.kids;

      activate();

      function activate() {
        vm.id = $routeParams.id;

        TopStoriesService.getStory(vm.id).then(function(res) {
          vm.story = res.data;
          vm.kids = res.data.kids;
        });
      }
    }
  ]);

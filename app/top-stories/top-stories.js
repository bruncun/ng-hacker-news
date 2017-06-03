"use strict";

angular
  .module("hackerNews.topStories", ["ngRoute"])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "top-stories/top-stories.html",
        controller: "TopStoriesCtrl as vm"
      });
    }
  ])
  .controller("TopStoriesCtrl", [
    "TopStoriesService",
    function(TopStoriesService) {
      var vm = this;
      vm.stories = [];
      vm.loading = true;

      activate();

      function activate() {
        TopStoriesService.getStories().then(function(res) {
          vm.loading = false;
          vm.stories = res.data.slice(0, 30);
        });
      }
    }
  ]);

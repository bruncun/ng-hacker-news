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
    "$location",
    "TopStoriesService",
    function($location, TopStoriesService) {
      var vm = this;
      vm.currentPage = $location.search().page || 1;
      vm.stories = [];
      vm.loading = true;
      vm.start = 30 * (vm.currentPage - 1) + 1;

      vm.updatePage = function(newPageNumber, oldPageNumber) {
        vm.start = 30 * (newPageNumber - 1) + 1;
        $location.search("page", newPageNumber);
      };

      function activate() {
        TopStoriesService.getStories().then(function(res) {
          vm.loading = false;
          vm.stories = res.data;
        });
      }

      activate();
    }
  ]);

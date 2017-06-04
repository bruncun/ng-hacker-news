"use strict";

// Declare app level module which depends on views, and components
angular
  .module("hackerNews", [
    "ngRoute",
    "ngSanitize",
    "angularUtils.directives.dirPagination",
    "hackerNews.topStories",
    "hackerNews.story"
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider.otherwise({ redirectTo: "/" });
    }
  ]);

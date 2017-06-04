"use strict";

// Declare app level module which depends on views, and components
angular
  .module("hackerNews", [
    "ngRoute",
    "ngSanitize",
    "angularUtils.directives.dirPagination",
    "hackerNews.topStories",
    "hackerNews.story",
    "hackerNews.storyComments"
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/" });
    }
  ]);

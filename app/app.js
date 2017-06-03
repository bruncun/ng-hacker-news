"use strict";

// Declare app level module which depends on views, and components
angular
  .module("hackerNews", [
    "ngRoute",
    "ngSanitize",
    "hackerNews.topStories",
    "hackerNews.version"
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/" });
    }
  ]);

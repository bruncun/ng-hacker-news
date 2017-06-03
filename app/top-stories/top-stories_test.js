"use strict";

describe("myApp.topStories module", function() {
  beforeEach(module("myApp.topStories"));

  describe("topStories controller", function() {
    it(
      "should ....",
      inject(function($controller) {
        //spec body
        var topStoriesCtrl = $controller("TopStoriesCtrl");
        expect(topStoriesCtrl).toBeDefined();
      })
    );
  });
});

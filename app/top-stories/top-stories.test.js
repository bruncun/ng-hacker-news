"use strict";

describe("hackerNews.topStories module", function() {
  beforeEach(module("hackerNews.topStories"));

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

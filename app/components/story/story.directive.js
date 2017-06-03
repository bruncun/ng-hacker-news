angular
  .module("hackerNews.story.story-directive", [])
  .directive("story", function() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        id: "=id"
      },
      templateUrl: "components/story/story.html",
      controller: function($scope, TopStoriesService) {
        var vm = this;

        TopStoriesService.getStory($scope.id).then(function(res) {
          vm.story = res.data;
        });
      },
      controllerAs: "story",
      link: function(scope, elem, attrs, ctrl) {}
    };
  });

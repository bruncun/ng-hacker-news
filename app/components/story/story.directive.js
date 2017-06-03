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
        vm.loading = true;

        activate();

        function activate() {
          TopStoriesService.getStory($scope.id).then(function(res) {
            vm.story = res.data;
            vm.title = vm.story.title;
            vm.url = vm.story.url;
            vm.loading = false;
          });
        }
      },
      controllerAs: "vm",
      link: function(scope, elem, attrs, ctrl) {}
    };
  });

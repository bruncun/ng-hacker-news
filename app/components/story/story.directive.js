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
      controller: [
        "$scope",
        "$filter",
        "TopStoriesService",
        function($scope, $filter, TopStoriesService) {
          var vm = this;
          vm.loading = true;

          activate();

          function activate() {
            TopStoriesService.getStory($scope.id).then(function(res) {
              vm.story = res.data;
              vm.title = vm.story.title;
              vm.url = vm.story.url;
              if (!vm.url) {
                vm.url = "https://news.ycombinator.com/item?id=" + vm.story.id;
              }
              vm.domain = $filter("getDomainFromUrl")(vm.url);
              vm.score = vm.story.score;
              vm.author = vm.story.by;
              vm.time = $filter("getHoursAgo")(vm.story.time);
              vm.numComments = vm.story.descendants;
              vm.loading = false;
            });
          }
        }
      ],
      controllerAs: "vm",
      link: function(scope, elem, attrs, ctrl) {}
    };
  });

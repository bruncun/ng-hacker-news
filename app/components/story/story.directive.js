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
            if (!vm.url) {
              vm.url = "https://news.ycombinator.com/item?id=" + vm.story.id;
            }
            vm.domain = getDomainFromUrl(vm.url);
            vm.score = vm.story.score;
            vm.author = vm.story.by;
            vm.time = getHoursAgo(vm.story.time);
            vm.loading = false;
          });
        }

        function getDomainFromUrl(url) {
          var a = document.createElement("a");
          a.setAttribute("href", url);
          if (a.hostname === "news.ycombinator.com") {
            return "";
          } else {
            return "(" + a.hostname + ")";
          }
        }

        function getHoursAgo(seconds) {
          var secondDifference = Date.now() / 1000 - seconds;

          if (secondDifference < 3600) {
            var minutesAgo = secondDifference / 60;
            return Math.floor(minutesAgo) + " minutes ago";
          } else {
            var hoursAgo = secondDifference / 3600;
            return Math.floor(hoursAgo) + " hours ago";
          }
        }
      },
      controllerAs: "vm",
      link: function(scope, elem, attrs, ctrl) {}
    };
  });

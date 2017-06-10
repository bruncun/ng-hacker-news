angular
  .module("hackerNews.comment.comment-directive", [])
  .directive("comment", function() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        id: "=id"
      },
      templateUrl: "components/comment/comment.html",
      controller: function($scope, $filter, TopStoriesService) {
        var vm = this;
        vm.loading = true;

        activate();

        function activate() {
          TopStoriesService.getStory($scope.id).then(function(res) {
            vm.commentText = res.data.text;
            vm.commentAuthor = res.data.by;
            vm.commentTime = res.data.time;
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

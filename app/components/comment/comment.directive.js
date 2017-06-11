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
              vm.commentText = res.data.text;
              vm.commentAuthor = res.data.by;
              vm.kids = res.data.kids;
              vm.commentTime = $filter("getHoursAgo")(res.data.time);
              vm.loading = false;
            });
          }
        }
      ],
      controllerAs: "vm",
      link: function(scope, elem, attrs, ctrl) {}
    };
  });

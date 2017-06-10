angular.module("hackerNews").filter("getDomainFromUrl", getDomainFromUrl);

function getDomainFromUrl() {
  return function(input) {
    var a = document.createElement("a");
    a.setAttribute("href", input);
    if (a.hostname === "news.ycombinator.com") {
      return "";
    } else {
      return "(" + a.hostname + ")";
    }
  };
}

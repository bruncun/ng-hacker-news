var gulp = require("gulp");
var concat = require("gulp-concat");
var gulp = require("gulp");
var minify = require("gulp-minify");
var gulpCopy = require("gulp-copy");
var sourceFiles = ["./app/index.html"];
var destination = "./dist/";
var templateCache = require("gulp-angular-templatecache");

gulp.task("default", function() {
  // place code for your default task here
});

gulp.task("scripts", function() {
  return gulp
    .src([
      "./app/bower_components/angular/angular.js",
      "./app/bower_components/angular-route/angular-route.js",
      "./app/bower_components/angular-sanitize/angular-sanitize.js",
      "./app/bower_components/angularUtils-pagination/dirPagination.js",
      "./app/app.js",
      "./app/templates.js",
      "./app/filters/getDomainFromUrl.js",
      "./app/filters/getHoursAgo.js",
      "./app/story-comments/story-comments.js",
      "./app/top-stories/top-stories.js",
      "./app/top-stories/top-stories.service.js",
      "./app/components/story/story.js",
      "./app/components/story/story.directive.js",
      "./app/components/comment/comment.js",
      "./app/components/comment/comment.directive.js"
    ])
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("compress", function() {
  return gulp
    .src("./dist/bundle.js")
    .pipe(
      minify({
        ext: {
          src: "-debug.js",
          min: ".min.js"
        },
        exclude: ["tasks"],
        ignoreFiles: [".combo.js", "-min.js"]
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("cacheTemplates", function() {
  return gulp
    .src("./app/**/*.html")
    .pipe(templateCache())
    .pipe(gulp.dest("./app/"));
});

gulp.task("copy", function() {
  return gulp
    .src("./app/index.html", { base: "./app/" })
    .pipe(gulp.dest("./dist/"));
});

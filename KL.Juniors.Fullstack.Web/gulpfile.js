var gulp = require("gulp");
var requireDir = require("require-dir");

requireDir("./gulp-tasks");

gulp.task("build", [
    "build-less"
]);

gulp.task("default", ["build"]);

gulp.task('watch', ['build'], function () {
    gulp.watch(['./frontend/**/*.less'], ["build-less"]);
});
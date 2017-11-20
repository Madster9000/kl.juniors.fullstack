var gulp = require("gulp");
var requireDir = require("require-dir");

requireDir("./gulp-tasks");

gulp.task("build", [
    "build-less",
    "build-scripts"
]);

gulp.task("default", ["build"]);

gulp.task('watch', ['build'], function () {
    gulp.watch('./frontend/**/*.{ts,js}', ["build-scripts"]);
    gulp.watch(['./frontend/**/*.html'], ["build-scripts"]);
    gulp.watch(['./frontend/**/*.less'], ["build-less"]);
});
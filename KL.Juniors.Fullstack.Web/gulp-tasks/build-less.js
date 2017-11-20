var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');

gulp.task("build-less", function () {
    return gulp.src('./frontend/**/*.less')
        .pipe(less())
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest('./wwwroot/styles'));
});
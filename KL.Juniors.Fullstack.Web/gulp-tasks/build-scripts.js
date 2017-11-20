var gulp = require("gulp");
var webpack = require("gulp-webpack");
var config = require("../webpack.config");

gulp.task("build-scripts", function () {
    return gulp.src("./frontend/main.module.ts")
        .pipe(webpack(config));
});
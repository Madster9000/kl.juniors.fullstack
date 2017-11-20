var gulp = require("gulp");
var webpack = require("gulp-webpack");
var config = require("../webpack.config");

gulp.task("build-scripts", function () {
    return gulp.src("")
        .pipe(webpack(config), null, function (error, stats) {
            console.log(error);
        });
});
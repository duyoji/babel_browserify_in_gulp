var gulp       = require("gulp");
var browserify = require('gulp-browserify');
//var source     = require("vinyl-source-stream");
var sourcemaps = require('gulp-sourcemaps');
var babel      = require('gulp-babel');
var concat     = require('gulp-concat');


gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(browserify())
        // .pipe(
        //     browserify({
        //         transform: ['reactify']
        //     })
        // )
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

/*
gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', function() {
  gulp.src('src/app.js')
    .pipe(babel())
    .pipe(browserify({
      transform: ['babelify'],
      extensions: ['.coffee']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./build/js'))
});

*/

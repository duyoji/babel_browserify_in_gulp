var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var babel      = require('gulp-babel');

gulp.task('watch', function(){
    gulp.watch(['app.js', 'src/**/*.js'], ['default']);
});

gulp.task('default', function () {
    browserify({
        entries: ['./app.js'],
        debug  : true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});

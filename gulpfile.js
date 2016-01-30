var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var angularFilesort = require('gulp-angular-filesort');

var SCRIPT_SRC = 'src/*.js';

gulp.task('default', [], function() {
  return gulp.src(SCRIPT_SRC)
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
      .pipe(uglify({compress: {drop_debugger: false}}))
      .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(''));
});

gulp.task('watch', [], function() {
  return gulp.watch(SCRIPT_SRC, ['default']);
});

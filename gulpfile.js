var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {

});

gulp.task('build', ['test'], function() {
  return gulp.src('./src/Hosts.js')
    .pipe();
});

gulp.task('test', function () {
  return gulp.src('test.js', {read: false})
		.pipe(mocha({reporter: 'min'}));
});

gulp.task('watch', ['watch-test']);

gulp.task('watch-test', function() {
    return gulp.watch(['src/**', '.'], ['test']);
});

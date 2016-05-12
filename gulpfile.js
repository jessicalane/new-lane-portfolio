var gulp = require('gulp');
	jshint = require('gulp-jshint');
	stylus = require('gulp-stylus')

gulp.task('lint', function() {
	return gulp.src('/js/*.js')
		.pipe(jshint()) // Is this line necessary?
		.pipe(jshint.reporter('default'));
});

gulp.task('styles', function () {
	gulp.src('public/styles/styles.styl')
		.pipe(stylus())
		.pipe(gulp.dest('public/styles/css'));
});

gulp.task('watch:styles', function () {
	gulp.watch('public/styles/*.styl', ['styles']);
});

gulp.task('default', ['lint'], function() {

});

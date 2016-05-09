var gulp = require('gulp');
	jshint = require('gulp-jshint');
	sass = require('gulp-sass');

gulp.task('lint', function() {
	return gulp.src('/js/*.js')
		.pipe(jshint()) // Is this line necessary?
		.pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
	gulp.src('./styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
});

gulp.task('default', ['lint'], function() {

});

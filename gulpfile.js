var gulp = require('gulp');
	jshint = require('gulp-jshint');

gulp.task('lint', function() {
	return gulp.src('/js/*.js')
		.pipe(jshint()) // Is this line necessary?
		.pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint'], function() {

});

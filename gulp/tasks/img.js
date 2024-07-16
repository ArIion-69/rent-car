module.exports = function() {
	$.gulp.task('img', function() {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}')
			.pipe($.gp.pug({
				pretty:true
			}))
			.pipe($.gp.tinypng('TG9YTPlnbCQLSqxl8Q7cuMxRaQ53KQhp'))
			.pipe($.gulp.dest('build/static/img/'));
	});
}
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-minify'),
	webserver = require('gulp-webserver')

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('sass', () =>
	gulp.src('./src/scss/*.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(autoprefixer({
		browsers:['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./build'))
);

gulp.task('minify', () => 
	gulp.src('./src/js/*.js')
	.pipe(minify())
	.pipe(gulp.dest('./build'))
)

gulp.task('default',() => 
	gulp.watch('./src/scss/*.scss', ['sass'])
)

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify-css');

var paths = {
	"js-sources": ['src/codemirror/codemirror.js','src/codemirror/continuelist.js','src/codemirror/markdown.js','src/codemirror/xml.js','src/codemirror/cm-addons/**/*.js', 'src/marked.js','src/simplemde.js'],
	"css-sources": ['src/theme.css', 'src/codemirror/**/*.css'],
	"build-path": 'build/',
	"build-assets": 'build/**/*',
	"dist-path": 'dist/'
};

gulp.task('js', function () {
	return gulp.src(paths['js-sources'])
		.pipe(concat('mendel.js'))
		.pipe(gulp.dest(paths['build-path']))
		.pipe(uglify())
		.pipe(concat('mendel.min.js'))
		.pipe(gulp.dest(paths['build-path']));
});

gulp.task('css', function () {
	return gulp.src(paths['css-sources'])
		.pipe(concat('mendel.css'))
		.pipe(gulp.dest(paths['build-path']))
		.pipe(minify())
		.pipe(concat('mendel.min.css'))
		.pipe(gulp.dest(paths['build-path']));
});

gulp.task('release', ['default'], function () {
	return gulp.src(paths['build-assets'])
		.pipe(gulp.dest(paths['dist-path']));
});

gulp.task('default', ['js', 'css']);
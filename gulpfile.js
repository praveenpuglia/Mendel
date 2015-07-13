var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify-css');

var paths = {
	"js-sources": ['src/codemirror/codemirror.js','src/codemirror/continuelist.js','src/codemirror/markdown.js','src/codemirror/xml.js','src/marked.js','src/simplemde.js'],
	"css-sources": ['src/theme.css'],
	"build-path": 'build/',
	"build-assets": 'build/**/*',
	"dist-path": 'dist/'
};

gulp.task('js', function () {
	return gulp.src(paths['js-sources'])
		.pipe(concat('marvelous.me.js'))
		.pipe(gulp.dest(paths['build-path']))
		.pipe(uglify())
		.pipe(concat('marvelous.me.min.js'))
		.pipe(gulp.dest(paths['build-path']));
});

gulp.task('css', function () {
	return gulp.src(paths['css-sources'])
		.pipe(concat('marvelous.me.css'))
		.pipe(gulp.dest(paths['build-path']))
		.pipe(minify())
		.pipe(concat('marvelous.me.min.css'))
		.pipe(gulp.dest(paths['build-path']));
});

gulp.task('release', ['default'], function () {
	return gulp.src(paths['build-assets'])
		.pipe(gulp.dest(paths['dist-path']));
});

gulp.task('default', ['js', 'css']);
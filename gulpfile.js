var gulp = require('gulp');
var browserify = require('browserify');
// var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    var p = browserify({
        entries: './src/country-flags.js',
        extensions: ['.js'],
        debug: true,
        standalone:'CountryFlags'
    })
        .transform('babelify', {
            presets: ['es2015']
        })
        .bundle()
        .pipe(source('CountryFlags.js'))
        .pipe(gulp.dest('dist'));

    var p2 = browserify({
        entries: './src/country-flags.js',
        extensions: ['.js'],
        debug: false,
        standalone:'CountryFlags'
    })
        .transform('babelify', {
            presets: ['es2015']
        })
        .transform('uglifyify')
        .bundle()
        .pipe(source('CountryFlags.min.js'))
        .pipe(gulp.dest('dist'));

    return p && p2;
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.js', ['build']);
});

gulp.task('default', ['build']);
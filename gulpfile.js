const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Task for compiling SCSS to CSS
gulp.task('styles', function() {
    return gulp.src('styles/**/*.scss') // Source files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css')); // Destination folder
});

// Task for minifying and concatenating JS
gulp.task('scripts', function() {
    return gulp.src('scripts/**/*.js') // Source files
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js')); // Destination folder
});

// Default task
gulp.task('default', gulp.series(['styles', 'scripts']));

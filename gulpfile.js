var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

// COMPILAR DE SASS PARA CSS
gulp.task('sass', function () {
    return gulp.src('./_src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', notify.onError({
        title: 'Erro ao compilar o css',
        message: '<%= error.message %>'
    }))
    .pipe(gulp.dest('./dist/css'));
});

// AQUI É O GULP WATCH
gulp.task('watch', function () {
    gulp.watch('./_src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'], function () {});
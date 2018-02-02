
var gulp = require('gulp');
gulp.task('hello', function() {
    console.log('Hello gulp!!!');
});

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function(){
    browserSync.init({
        server:{
            baseDir:'_app'
        },
    });
});

gulp.task('devWatch', ['browserSync'], function (){
    gulp.watch('_app/*.html', browserSync.reload);
    gulp.watch('_app/js/**/*.js', browserSync.reload);
});

//Example of Copying PNG - Dont run just an example
gulp.task('copyPNG', function(){
    gulp.src(['_app/img/**/*.png']).pipe(gulp.dest('_deploy/img'));
});
//Images
var imagemin = require('gulp-imagemin');
gulp.task('images', function(){
return gulp.src('_app/img/**/*.+(png|jpg|gif|svg)')
.pipe(imagemin())
.pipe(gulp.dest('_deploy/images'));
});

gulp.task('fonts', function(){
return gulp.src('_app/font/**/*')
.pipe(gulp.dest('_deploy/font'));
});
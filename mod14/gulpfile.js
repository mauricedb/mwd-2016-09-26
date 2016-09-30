var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('less', function(){

    return gulp.src('wwwroot/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('wwwroot/css'));
})

gulp.task('watch-less', function(){
    gulp.watch('**/*.less', ['less']);
})

gulp.task('default', ['less', 'watch-less']);
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var less = require('gulp-less');
var nodemon = require('gulp-nodemon');
var minifyCSS = require('gulp-minify-css');
 
 
var targetCSSDir = 'src/assets/css';
gulp.task('css', function () {
    return gulp.src(lessDir + '/*.less')
        .pipe(less({ style: 'compressed' }).on('error', gutil.log))
        .pipe(gulp.dest(targetCSSDir))
        .pipe(notify('CSS minified'))
});
 
 
var lessDir = 'src/assets/less';
gulp.task('watch', function () {
    gulp.watch(lessDir + '/*.less', ['css']);
});
 

var livereloader = function () {
    gutil.log('[livereoload called]');
};

 gulp.task('develop', function () {
    nodemon({
        script: 'server.js',
        options: '-e html,js -i ignored.js'
    }).on('restart', function(){
        gutil.log('[nodemon]', 'Restarted', gutil.colors.cyan('123'));
        livereloader();
    });
});

// What tasks does running gulp trigger?
gulp.task('default', ['css', 'watch', 'develop']);
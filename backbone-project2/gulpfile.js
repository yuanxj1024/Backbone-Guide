var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var browser = require('browser-sync');
var browserSync = browser.create();
var loadMap = [
    './web/*.*',
    './css/**/*.*',
    './js/**/*.*',
    './js/*.*',
    './css/*.*'
];

gulp.task('server', [], function () {
    browserSync.init(loadMap, {
        server: './'
    });
    gulp.watch(loadMap, function (file) {
        browserSync.reload();
    });
});


gulp.task('sass', function (done) {
    var output = './web/css/';
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(output))
        //.pipe(minifyCss({
        //    keepSpecialComments: 0
        //}))
        //.pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(output))
        .on('end', done);
});


gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', function () {
        gulp.start('sass');
    });
});

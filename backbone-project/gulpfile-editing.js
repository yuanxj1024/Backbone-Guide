/**
 * Created by AaronYuan on 8/22/15.
 */

'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  fileinclude = require('gulp-file-include'),
  clean = require('gulp-clean'),
  ftp = require('gulp-ftp'),
  util = require('gulp-util'),
  browsersync = require('browser-sync');

  //connect = require('gulp-connect');


var path = {
  js:
    './src/js/**/*.js'
  ,
  css:
    './src/css/**/*.css'
  ,
  sass:
    './src/sass/app.scss'
  ,
  img:
    './src/img/**/*'
  ,
  html:
    './src/**/*.html'
  ,
  data:
    './src/data/*'
  ,
  fonts:
    './src/fonts/*'
};

var ftpConfig = {
  host: '',
  user: '',
  pass: '',
  remotePath: '/'
};

//开发时发布目录
var outputDev = './dist/',
  // 发布到web项目目录
  outputRelease = '../Web/BY.Web/',
  output = outputDev;

/***
 *
 * 主要任务
 *
 * */

gulp.task('default',['clean'], function(){
  gulp.start('sass','html','js','move-file-to');
});

gulp.task('watch',function(){
  output = outputDev;
  gulp.start('default','browser-sync');

  gulp.watch([
    path.js,
    path.sass,
    path.css,
    path.html,
    path.img
  ], function(){
    //gulp.start('default');
    gulp.start('sass','html','js');
  });
});





gulp.task('clean', function(){
  return gulp.src(output)
    .pipe(clean({force: true}));
});

gulp.task('sass', function(done){
  gulp.src(path.sass)
    .pipe(sass().on('error',sass.logError))
    .pipe(minifycss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(output+'/css/'))
    .on('end', done);
});

gulp.task('html', function(){
  return gulp.src(path.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(output));

});

gulp.task('js', function(){
  return gulp.src(path.js)
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(output+'/js/'));
});

gulp.task('ftp', function(){
  return gulp.src(output+ '**/*')
    .pipe(ftp(ftpConfig))
    .pipe(util.noop());
});

gulp.task('move-file-to', function(){
  return gulp.src([
    path.js,
    path.css,
    path.img,
    path.html,
    path.data,
    path.fonts
  ],{base: './src'})
    .pipe(gulp.dest(output));
});

gulp.task('browser-sync', function(){
  browsersync({
    files: "**",
    server: {
      baseDir: output
    }
  });
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

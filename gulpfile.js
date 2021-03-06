const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence').use(gulp);
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');
const watch = require('gulp-watch');
const server = require('gulp-webserver');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify-es').default



gulp.task('app', ['html', 'styl','js','img','manifest','sw']);
gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))

});

gulp.task('manifest', () => {
    return gulp.src('src/*.json')
        .pipe(gulp.dest('dist'))

});

gulp.task('sw', ()=>{
    return gulp.src(['src/*.js'])
        .pipe(gulp.dest('dist')) 
});

gulp.task('styl', () => {
    return gulp.src('src/**/*.styl')
        .pipe(stylus())
        .pipe(uglifycss({ 'uglifyComments': true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('dist/css'))
});
/*
gulp.task('js', () => {
    gulp.src('src/js/appCtrl.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./dist/js'))
});*/

gulp.task('js', function() {
    return browserify('./src/js/appCtrl.js')
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .on('error', function (err) {console.log(err.toString()); })
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('img', function () {
    return gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./dist/img'));
  })


gulp.task('watch', () => {
    watch('src/**/*.html', () => gulp.start('html'))
    watch('src/**/*.styl', () => gulp.start('styl'))
    watch('src/**/*.js', () => gulp.start('js'))
    watch('src/**/*.img', () => gulp.start('img'))
    watch('src/*.json', () => gulp.start('manifest'))
    watch('src/*.js', () => gulp.start('sw'))
    
});

gulp.task('server', ['watch'], () => {
    return gulp.src('dist').pipe(server({
        livereload: true,
        https: true,
        port: 3030,
        open: true
    }))
})

gulp.task('default', () => {
    if (util.env.production) {
        sequence('app');
    } else {
        sequence('app', 'server')
    }

})
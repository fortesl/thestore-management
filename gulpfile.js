var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var srcjsFiles =
    [
    'src/modules/management-module/management-app.js', 'src/modules/management-module/scripts/**/*.js'
    ],
    srchtmlFiles = ['src/**/*.html'],
    srccssFiles = ['src/modules/**/*.css'],
    unitTestjsFiles = ['tests/unit/**/*.js'],
    e2ejsFiles = ['tests/e2e/**/*.js'];

    gulp.task('default', function() {
});

gulp.task('clean:js', function(cb) {
    del([
        'src/js/management.js'
    ], cb);
});

gulp.task('concat:js', function() {
    return gulp.src(srcjsFiles)
        .pipe(concat('management.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'));
});

gulp.task('lint:js', function() {
    return gulp.src(srcjsFiles,e2ejsFiles,unitTestjsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('serve', function() {
    browserSync({
        server: {baseDir: 'src'}
    });
    gulp.watch([srcjsFiles, unitTestjsFiles, e2ejsFiles], ['lint:js']);
    gulp.watch(srcjsFiles, ['concat:js']);
    gulp.watch([srchtmlFiles, 'src/js/*.js', 'src/*.css'], [browserSync.reload]);
});

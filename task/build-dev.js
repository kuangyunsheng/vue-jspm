
const gulp        = require('gulp');
const htmlreplace = require('gulp-html-replace');
const exec = require('child_process').exec;
const sass = require('gulp-sass');
const concat = require('gulp-concat');                            //- 多个文件合并为一个；
const minifyCss = require('gulp-clean-css');                     //- 压缩CSS为一行；
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const distDir = 'dist/';
const distCssFile = 'app.min.css';
const distJsFile = 'app.min.js';
const jsBundleCmd = 'jspm bundle-sfx src/main.js ' + distDir + distJsFile + ' --minify'

function buildIndexPage() {
    gulp.src('./src/index.html')
    .pipe(htmlreplace({
        'css': distCssFile, 
        'js': distJsFile, 
        'scss': {src: null, tpl: ''}}))
    .pipe(gulp.dest(distDir));
}

function bundleJs(cb) {
    exec(jsBundleCmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

function bundleCss() {
    return gulp.src('./src/main.scss')
    .pipe(sass().on('error', sass.logError))    
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat(distCssFile))
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distDir));
}

const distTaskDependencies = (function () {
    gulp.task('bundleCss-dev', bundleCss);
    gulp.task('bundleJs-dev', bundleJs);
    gulp.task('buildIndexPage-dev', buildIndexPage);
    return ['bundleCss-dev', 'bundleJs-dev', 'buildIndexPage-dev']
})();

gulp.task('build-dev', distTaskDependencies, function () {
});
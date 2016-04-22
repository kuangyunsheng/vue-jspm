var fs          = require('fs');
var yaml        = require('js-yaml');
// var _           = require('lodash');
var gulp        = require('gulp');
// var proxy       = require('proxy-middleware');
// var url         = require('url');
var browserSync = require('browser-sync');

var htmlreplace = require('gulp-html-replace');
var exec = require('child_process').exec;

try {
    var options = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf-8'));
} catch (error) {
    throw new Error(error);
}

var taskDependencies = (function() {
    gulp.task('server', function() {
        // var proxyMiddleware = proxy(
        //     _.assign(url.parse(options.proxyURL), options.proxyOptions)
        // );
        // options.browserSync.server.middleware.push(proxyMiddleware);
        browserSync(options.browserSync);
    });

    return ['server'];
}());

gulp.task('default', taskDependencies, function() {
    // Default Task Denifition
});

function buildIndexPage() {
    gulp.src('./src/index.html')
    .pipe(htmlreplace({'js': 'app.min.js'}))
    .pipe(gulp.dest('dist/'));
}

function bundleJs(cb) {
    exec('jspm bundle-sfx src/main.js dist/app.min.js --minify', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

var distTaskDependencies = (function () {
    gulp.task('bundleJs', bundleJs);
    gulp.task('buildIndexPage', buildIndexPage);
    return ['bundleJs', 'buildIndexPage']
})();

gulp.task('build', distTaskDependencies, function () {
});
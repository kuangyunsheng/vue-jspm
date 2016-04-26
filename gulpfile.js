const fs          = require('fs');
const yaml        = require('js-yaml');
// var _           = require('lodash');
const gulp        = require('gulp');
// var proxy       = require('proxy-middleware');
// var url         = require('url');
const browserSync = require('browser-sync');

try {
    const options = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf-8'));
} catch (error) {
    throw new Error(error);
}

const taskDependencies = (function() {
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

require('./task/build-dev');
require('./task/build-prod');
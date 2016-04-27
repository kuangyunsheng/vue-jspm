// Karma configuration
// Generated on Fri Apr 15 2016 14:31:16 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    //basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm','mocha','sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
        'node_modules/babel-polyfill/dist/polyfill.js',
        {pattern: 'src/**/*.html', served:true, included:false}
    ],
    
    jspm: {
        loadFiles: [
            'src/**/*spec.js'
        ],
        serveFiles: [
            'src/**/!(*spec).js'
        ]
    },

    proxies: {
        '/src/': '/base/src/',
        '/jspm_packages/': '/base/jspm_packages/',
        '/config.js': '/base/config.js'
    },
    
    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/!(*spec).js': ['babel', 'sourcemap', 'coverage']
    },

    babelPreprocessor: {
        options: {
            sourceMap: 'inline'
        },
        sourceFileName: function(file) {
            return file.originalPath;
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
        instrumenters: {isparta: require('isparta')},
        instrumenter: {
            'src/*/*.js': 'isparta'
        },

        reporters: [
            {
                type: 'text-summary',
                subdir: normalizationBrowserName
            },
            {
                type: 'html',
                dir: 'coverage/',
                subdir: normalizationBrowserName
            }
        ]
    },
    
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
  
  function normalizationBrowserName(browser) {
    return browser.toLowerCase().split(/[ /-]/)[0];
  }
}

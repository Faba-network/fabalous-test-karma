// Karma configuration
// Generated on Fri Feb 26 2016 11:21:50 GMT+0100 (CET)
var webpackConfig = require('./config/webpack/WebpackRuntimeWebTest.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __workDir,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      __workDir+'/src/**/*Spec.ts',
      __workDir+'/src/**/*Spec.tsx'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*Spec.ts*': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    frameworks: ['jasmine'],
    reporters: ['progress','coverage'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
};

var path = require('path');
var webpackConfig = require('./webpack/webpack.test.babel');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    browsers:  process.env.TRAVIS
      ? ['ChromeTravis']
      : ['Chrome'],

    autoWatch: process.env.TRAVIS ? false : true,
    singleRun: process.env.TRAVIS ? true : false,

    files: [
      'app/components/Button/Button.test.js'
    ],

    preprocessors: {
      ['app/components/Button/Button.test.js']: ['webpack', 'sourcemap'],
    },

    webpack: webpackConfig
  });
};

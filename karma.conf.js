module.exports = function(config) {
    // Frameworks used for testing
    config.set({
      frameworks: ['parallel', 'jasmine'], 
  
      // Files to include in the test
      files: [
        'src/app.js',
        'src/index.html',
        'tests/index1.spec.js',
        'tests/index2.spec.js',
      ],
  
      // Browsers to use for testing
      browsers: ['Chrome'],
  
      // Parallel testing configuration
      parallelOptions: {
        executors: 2,
        shardStrategy: 'round-robin', 
      },
  
      // Run tests only once
      singleRun: true,
  
      // Karma plugins used
      plugins: [
        'karma-parallel',
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-html2js-preprocessor',
        'karma-htmlfile-reporter',
      ],
  
      // Preprocessors configuration
      preprocessors: {
        'src/index.html': ['html2js'],
      },
  
      // Reporters used for displaying test results
      reporters: ['html'], 
      // Alternative: use ['html', 'progress'] for both HTML and console progress reporting
  
      // HTML Reporter configuration
      htmlReporter: {
        outputFile: './report.html',
        pageTitle: 'Report Information',
        subPageTitle: 'Jasmine Test Cases Report',
        groupSuites: true,
        useCompactStyle: true,
        useLegacyStyle: true,
      }
    });
  };
  
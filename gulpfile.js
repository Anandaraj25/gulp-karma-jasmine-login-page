const gulp = require('gulp');
const karma = require('karma');
const { sendEmail } = require('./helpers/nodemailerSetup');
const { parseConfig } = require('karma/lib/config');

// Task to run Karma tests
function karmaInstance(done) {
    
    // Variables to track the total number of passed and failed tests
    let totalPassed = 0;
    let totalFailed = 0;

    // Karma configuration file
    const karmaConfig = {
        configFile: __dirname + '/karma.conf.js',
    };

    // Parse Karma configuration
    const karmaConfigInstance = parseConfig(karmaConfig.configFile, {
        promiseConfig: true,
        throwErrors: true,
    });

    // Create a new Karma server instance
    const karmaServer = new karma.Server(karmaConfigInstance, function(exitCode) {
        if (exitCode === 0) {
            console.log('\nTest cases completed successfully!');
        } else {
            console.log('\nTest cases failed!');
        }

        console.log('\nKarma server stopped.');

        // Display test results summary
        console.log('\nTest Results:');
        console.table({
            'Total Passed': totalPassed,
            'Total Failed': totalFailed,
            'Total Test Cases': totalPassed + totalFailed,
        });
        done();
    });

    // Event handler for run_complete event
    karmaServer.on('run_complete', function(browser, results) {
        totalPassed += results.success;
        totalFailed += results.failed;
    });

    // Start Karma server
    karmaServer.start();
}

// Task to send email
function sendmail(done) {
    // Call the sendEmail function
    sendEmail();
    done();
}

// Gulp task to run tests
gulp.task('test', karmaInstance);

// Gulp task to send email
gulp.task('mail', sendmail);

// Gulp task to run tests and then send email
gulp.task('test-mail', gulp.series('test', 'mail'));

// Default Gulp task (runs 'test-mail' task)
gulp.task('default', gulp.series('test-mail'));

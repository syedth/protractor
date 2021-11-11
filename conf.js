const argv = require('yargs').argv;
const environmentValue = argv.env || 'qa';
const storeValue = argv.uri || 'ies';
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.environmentValue = environmentValue;
exports.storeValue = storeValue;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],
    onPrepare() {
        browser.ignoreSynchronization = true;
        browser.driver.manage().timeouts().implicitlyWait(50000);
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './.tmp/reports/',
                takeScreenshotsOnlyOnFailures: true,
                fileName: 'report'
            })
        );
    },
};

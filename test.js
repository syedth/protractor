const {
      browser,
      by,
      element
} = require('protractor');
const conf = require('./conf');
const environmentValue = conf.environmentValue;
const storeValue = conf.storeValue;

describe('Login', function () {
      it(`Navigate to ${storeValue} Store`, function () {
            const uri = 'https://' + environmentValue + '.inksoft.com/' + storeValue;
            browser.get(uri);
            browser.sleep(5000);

            expect(element(by.id('btn-login')).getText()).toEqual('Login');
      });

      it(`Login to the ${storeValue} Store`, function () {
            element(by.id('btn-login')).click();
            browser.sleep(5000);

            expect(element(by.css('#create-account-callout > h2')).getText()).toEqual('Create an Accounts');
      });
});

var decrypt = require('../utils/encrypt_decrypt').decrypt;

describe('Follow button on github page.', function () {

    it('follow', function (done) {
        browser
            .url('https://github.com/kolyjjj/')
            .getText('.follow a').then(function(text){
                expect(text).toBe('Follow')
            })
            .click('.follow a')
            .waitForVisible('#login_field')
            .setValue('#login_field', 'username')
            .setValue('#password', decrypt('password'))
            .click('input[name="commit"]')
            .waitForVisible('.follow button')
            .click('.follow button')
            .waitForVisible('.unfollow button')
            .isVisible('.follow button').then(function(isVisible) {
                expect(isVisible).toBe(false);
            })
            .isVisible('.unfollow button').then(function(isVisible) {
                expect(isVisible).toBe(true);
            })
            .call(done);
    });

});
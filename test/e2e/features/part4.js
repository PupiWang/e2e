var decrypt = require('../utils/encrypt_decrypt').decrypt;

describe('buy sth on JD', function () {

    it('buy sth on JD', function (done) {
        browser
            .url('http://item.jd.com/1111111.html')
            .click('.btn-append')
            .waitForVisible('.btn-pay')
            .click('.btn-pay')
            .waitForVisible('.submit-btn')
            .click('.submit-btn')
            .waitForVisible('#dialogIframe')
            .frame('dialogIframe')
            .waitForVisible('#loginname')
            .setValue('#loginname', 'username')
            .setValue('#nloginpwd', decrypt('password'))
            .click('.login-btn')
            .frameParent()
            .waitForVisible('#payPriceId')
            .getText('#payPriceId').then(function(text){
                expect(text).toBe('￥139.00');
            })
            .call(done);
    });

});
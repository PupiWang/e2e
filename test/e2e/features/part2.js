describe('Interaction test for www.bootcss.com', function () {

    it('scroll to top button should display when I scroll down for 600px', function (done) {
        browser
            .url('http://www.bootcss.com/')
            .isVisible('#scrollUp').then(function (isVisible) {
                expect(isVisible).toBe(false);
            })
            .scroll(0, 600)
            .waitForVisible('#scrollUp').then(function (isVisible) {
                expect(isVisible).toBe(true);
            })
            .call(done);
    });

});
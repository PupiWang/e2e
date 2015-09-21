describe('Hello selenium', function () {

    it('Hello selenium', function (done) {
        browser
            .url('http://www.seleniumhq.org/')
            .getTitle(function(err, title) {
                expect(err).toBeFalsy();
                expect(title).toBe('Selenium - Web Browser Automation');
            })
            .call(done);
    });

});
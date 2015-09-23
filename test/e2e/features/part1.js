describe('Styling test for www.bootcss.com', function () {

    it('v3 doc link on top-left corner should be Bootstrap中文网.', function (done) {
        browser
            .url('http://www.bootcss.com/')
            .getText('.navbar-brand').then(function (text) {
                expect(text).toBe('Bootstrap中文网');
            })
            .call(done);
    });

    it('v3 doc button should have the right size and background color.', function (done) {
        browser
            .url('http://www.bootcss.com/')
            .getElementSize('.masthead-button-links .btn').then(function (size) {
                expect(size.width).toBe(290);
                expect(size.height).toBe(54);
            })
            .getCssProperty('.masthead-button-links .btn', 'background-color').then(function (color) {
                expect(color.parsed.hex).toBe('#337ab7');
            })
            .call(done);
    });

    it('v3 doc button should have the right role attribute.', function (done) {
        browser
            .url('http://www.bootcss.com/')
            .getAttribute('.navbar-collapse', 'role').then(function(role){
                expect(role).toBe('navigation');
            })
            .call(done);
    });

});
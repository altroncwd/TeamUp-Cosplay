module.exports = function (app, express) {

    app.post('/project', function(req, res) {

        // console.log('something just came through');

        res.status(200).send("Awesome");
    });
    app.post('/member', function(req, res) {

    });
    app.post('/costume', function(req, res) {

    });
    app.post('/part', function(req, res) {

    });
    app.post('/material', function(req, res) {

    });
    app.post('/picture', function(req, res) {

    });

    app.use('*', function (req, res) {
        res.status(404).send('404: Page not found');
    })

};

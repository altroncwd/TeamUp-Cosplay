module.exports = function (app, express) {

    app.get('/project', function(req, res) {

        res.status(200).send("Awesome");
    });
    app.get('/member', function(req, res) {

    });
    app.get('/costume', function(req, res) {

    });
    app.get('/part', function(req, res) {

    });
    app.get('/material', function(req, res) {

    });
    app.get('/picture', function(req, res) {

    });

    app.use('*', function (req, res) {
        res.status(404).send('404: Page not found');
    })

};

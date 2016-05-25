var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var postProject = require('./postProjects/postProjectRouter.js');
var getProject = require('./getProjects/getProjectRouter.js');

module.exports = function (app, express) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true})); // allows to parses objects
    app.use(express.static(__dirname + '/../client'));

    // all post requests
    require('./postProjects/postProjectController.js')(app, express);
    // all get requests
    require('./getProjects/getProjectController.js')(app, express);

    // any unmatched requests
    app.use('*', function (req, res) {
        res.status(404).send('404: Page not found');
    })


};

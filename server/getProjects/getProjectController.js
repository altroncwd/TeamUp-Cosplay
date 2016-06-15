var GET = require('./getProjectRouter.js');

module.exports = function (app, express) {

    // we pass the projects name as a project params
    app.get('/all', GET.getAllProjects);
    app.get('/project/:project', GET.getProjectByName);

    // app.get('/member', GET.getMember);
    // app.get('/costume', Get.getCostume);
    // app.get('/part', GET.getCostumeParts);
    // app.get('/material', GET.getMaterial);
    // app.get('/picture', GET.getPicture);

};

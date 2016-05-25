var GET = require('./getProjectRouter.js');

module.exports = function (app, express) {

    // we pass the projects name as a project params
    app.get('/project/:project', GET.getProject);

    // app.get('/member', GET.getMember);
    // app.get('/costume', Get.getCostume);
    // app.get('/part', GET.getCostumeParts);
    // app.get('/material', GET.getMaterial);
    // app.get('/picture', GET.getPicture);

};

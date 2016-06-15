var POST = require('./postProjectRouter.js');

module.exports = function (app, express) {

    app.post('/project', POST.addProject);

    app.post('/member', POST.addMember);

    app.post('/costume', POST.addCostume);

    app.post('/part', POST.addCostumeParts);

    app.post('/material', POST.addMaterial);

    app.post('/picture', POST.addRefrencePicture);

};

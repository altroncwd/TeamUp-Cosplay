var PUT = require('./updateProjectRouter.js');

module.exports = function (app, express) {

    app.put('/project', PUT.updateProject);

    app.put('/member', PUT.updateNewMember);

    app.put('/costume', PUT.updateCostume);

    app.put('/part', PUT.updateCostumeParts);

    app.put('/material', PUT.updateMaterial);

    app.put('/picture', PUT.updateRefrencePicture);

};

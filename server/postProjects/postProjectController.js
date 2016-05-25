var Post = require('./postProjectRouter.js');

module.exports = function (app, express) {

    app.post('/project', Post.addProject);

    app.post('/member', Post.addMember);

    app.post('/costume', Post.addCostume);

    app.post('/part', Post.addCostumeParts);

    app.post('/material', Post.addMaterial);

    app.post('/picture', Post.addRefrencePicture);

};

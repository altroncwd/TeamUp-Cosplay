var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RefrencePictureSchema = new Schema ({
        image : Object,
        tags : Array,
});

module.exports = mongoose.model('RefrencePicture', RefrencePictureSchema );

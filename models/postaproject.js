var mongoose = require('mongoose')
var schema = mongoose.Schema;

var postAProject = new Schema({
    "typeOfWork": String,
    "describeYourJob": String,
    "projectName": String,
    "skillsrequired": [Schema.Types.Mixed],
    "describeYourProject": String,
    "cost": String,
    "duration": String
});

module.exports = mongoose.model('postAProject', postAProject);
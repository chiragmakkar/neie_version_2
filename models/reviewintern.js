var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var reviewIntern = new Schema({
    "rating": Number,
    "review": String
});

module.exports = mongoose.model('reviewIntern', reviewIntern);
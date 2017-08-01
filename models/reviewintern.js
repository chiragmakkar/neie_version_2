var mongoose = require('mongoose')
var schema = mongoose.Schema;

var reviewIntern = new Schema({
    "rating": Number,
    "review": String
});

module.exports = mongoose.model('reviewIntern', reviewIntern);
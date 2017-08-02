var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var expertAdvice = new Schema({
    "email": String,
    "chooseDomain": String,
    "yourQuestion": String,
    "describeChatQuery": String,
    "describeExpectation": String

});

module.exports = mongoose.model('expertAdvice', expertAdvice);
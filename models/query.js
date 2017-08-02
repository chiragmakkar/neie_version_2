var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var query = new Schema({
    "queryDomain": String,
    "describeDiscussionQuery": String,
    "discussionExpectation": String
});

module.exports = mongoose.model('query', query);
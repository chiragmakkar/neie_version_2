var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://admin:admin@ds129053.mlab.com:29053/neie');
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});

var entreProfile = require('./entreprofile.js');
var internProfile = require('./internprofile');
var expertAdvice = require('./liveexpert.js');
var postAProject = require('./postaproject.js');
var query = require('./query.js');
var reviewIntern = require('./reviewintern.js');

module.exports = {
	entreProfile : entreProfile,
	internProfile : internProfile,
	expertAdvice : expertAdvice,
	postAProject : postAProject,
	query : query,
	reviewIntern : reviewIntern
}

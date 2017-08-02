var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var internProfile = new Schema({
    "type":String,
    "iFirstName": String,
    "iLastName": String,
    "iEmail": String,
    "iPhone": Number,
    "iPassword": String,
    "iEmail_verified": Boolean,
    "iPhone_verified": Boolean,
    "iOTP_Mobile": Number,
    "iEmailCode": String,
    "iIntroduction": String,
    "iFatherName": String,
    "iWebsite": String,
    "iLinkedIn": String,
    "iFacebook": String,
    "iSkills":String,
    "iExperience": [Schema.Types.Mixed],
    "iEducation": {
        "university": String,
        "course": String,
        "fromMonth": String,
        "fromYear": String,
        "toMonth": String,
        "toYear": String
    }
});

module.exports = mongoose.model('internProfile', internProfile);

var mongoose = require('mongoose')
var schema = mongoose.Schema;

//Entrepenuer Profile,prefix e represents entrepenuer
var entreProfile = new Schema({
    "eFirstName": String,
    "eLastName": String,
    "eEmail": String,
    "ePhone": Number,
    "ePassword": String,
    "eEmail_verified": Boolean,
    "ePhone_verified": Boolean,
    "eOTP_Mobile": Number,
    "eEmailCode": String,
    "eOrganisation": String,
    "eWebsite": String,
    "eAddress": String,
    "eAboutUs": String,
    "evision": String,
    "eFoundedOn": String,
    "eIndustryType": String,
});
//intern profile,prefix i represents intern
var internProfile = new Schema({
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

//post a project
var postAProject = new Schema({
    "typeOfWork": String,
    "describeYourJob": String,
    "projectName": String,
    "skillsrequired": [Schema.Types.Mixed],
    "describeYourProject": String,
    "cost": String,
    "duration": String
});

//Live Expert Advice Schema for Chat
var liveExpert = new Schema({
    "chooseDomain": String,
    "yourQuestion": String,
    "describeChatQuery": String,
    "describeExpectation": String

});
//Raise a Query Schema 
var query = new Schema({
    "queryDomain": String,
    "describeDiscussionQuery": String,
    "discussionExpectation": String
});
//Review Intern Schema
var reviewIntern = new Schema({
    "rating": Number,
    "review": String
});
module.exports = mongoose.model('entreProfile', entreProfile);
module.exports = mongoose.model('internProfile', internProfile);
module.exports = mongoose.model('postAProject', postAProject);
module.exports = mongoose.model('expertAdvice', expertAdvice);
module.exports = mongoose.model('query', query);
module.exports = mongoose.model('reviewIntern', reviewIntern);
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
});]
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
    "iEmailCode": String


});

//post a project
var postAProject = new Schema({
    "typeOfWork": String,
    "describeYourJob": String,
    "projectName": String,
    "skillInDomain": String,
    "skillNeeded": String,
    "describeYourProject": String,
    "cost": String,
    "duration": String
});

module.exports = mongoose.model('entreProfile', entreProfile);
module.exports = mongoose.model('internProfile', internProfile);
module.exports = mongoose.model('postAProject', postAProject);
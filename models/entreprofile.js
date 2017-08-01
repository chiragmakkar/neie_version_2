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

module.exports = mongoose.model('entreProfile', entreProfile);
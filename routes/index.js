var express = require('express');
var router = express.Router();
var mongo = require('../models/mongodb.js');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('./config.js');
var userEmail;


router.get('/', function(req, res, next) {
  console.log('You are on the homepage');
  res.send('You are on the homepage');
});
router.post('/register',function(req, res){
  console.log('You are on the register page');
  if(req.body.password === req.body.confirmPassword)  
    {
      if(req.body.type == 'in'){
        mongo.internProfile.findOne({'iEmail':req.body.email},function(err, intern){
          if(err){
            console.log(err);
            res.send(err);
          }
          else if(intern){
            console.log('user already exists as :'+ intern.type +" : "+ intern);
            res.send('user already exists as :'+ intern.type);
          }
          else if(!intern){
            bcrypt.hash(req.body.password, 7, function(err, hash){
              var intern =  new mongo.internProfile({
                "type":'intern',
                "iFirstName": req.body.firstname,
                "iLastName": req.body.lastname,
                "iEmail": req.body.email,
                "iPhone": req.body.phone,
                "iPassword": hash,
                "iEmail_verified": false,
                "iPhone_verified": false,
                "iOTP_Mobile": null,
                "iEmailCode": null,
                "iIntroduction": "",
                "iFatherName": "",
                "iWebsite": "",
                "iLinkedIn": "",
                "iFacebook": "",
                "iSkills":"",
                "iExperience": [Schema.Types.Mixed],
                "iEducation": {
                    "university": "",
                    "course": "",
                    "fromMonth": "",
                    "fromYear": "",
                    "toMonth": "",
                    "toYear": ""
                }
              })
              intern.save(function(err, intern){
                if(err){
                  console.log(err);
                }
                else if(intern){
                  console.log('new intern details registered : '+ intern);
                  res.send(intern);
                }
              });
            })
            
          }
        }) 
      }
    else if(req.body.type == 'en'){
        mongo.entreProfile.findOne({'eEmail':req.body.email},function(err, entre){
          if(err){
            console.log(err);
            res.send(err);
          }
          else if(entre){
            console.log('user already exists as : '+ entre.type);
            res.send('user already exists as : '+entre)
          }
          else if(!entre){
            bcrypt.hash(req.body.password, 7, function(err, hash){
              var entre = new mongo.entreProfile({
                "type":'entre',
                "eFirstName": req.body.firstname,
                "eLastName": req.body.lastname,
                "eEmail": req.body.email,
                "ePhone": req.body.phone,
                "ePassword": hash,
                "eEmail_verified": false,
                "ePhone_verified": false,
                "eOTP_Mobile": null,
                "eEmailCode": "",
                "eOrganisation": "",
                "eWebsite": "",
                "eAddress": "",
                "eAboutUs": "",
                "evision": "",
                "eFoundedOn": "",
                "eIndustryType": "",
              });
              entre.save(function(err, entre){
                if(err){
                  console.log(err);
                }
                else if(entre){
                  console.log('new entre details registered : '+ entre);
                  res.send(entre);
                }
              });
            })
            
          }
        })
    }
  }
});
router.post('/login',function(req, res){
  console.log('You are on the login page');
  if(req.body.type == 'in'){
    mongo.internProfile.findOne({'iEmail':req.body.email},function(err, intern){
      if(err){
        console.log(err);
        res.send(err);
      }
      else if(intern){
        bcrypt.compare(req.body.password, intern.iPassword, function(err, result){
          if(err){
            console.log(err);
          }
          else if(result){
            console.log("login successful"+intern);
            var token = jwt.sign(intern, config["secret"], {
					     expiresIn: 86400 // expires in 24 hours
            });
            console.log(intern.iEmail);
            //userEmail = intern.iEmail;
				    res.json({
					       success: true,
					       message: 'Authenticated',
					       token: token
				     });
          }
          else if(!result){
            console.log("passwords don't match");
            res.end("passwords don't match");
          }
        })
      }
    })
  }
  else if(req.body.type == 'en'){
    mongo.entreProfile.findOne({'eEmail':req.body.email}, function(err, entre){
      if(err){
        console.log(err);
        res.send(err);
      }
      else if(entre){
        bcrypt.compare(req.body.password, entre.ePassword, function(err, result){
          if(err){
            console.log(err);
          }
          else if(result){
            console.log("login successful"+entre);
            var token = jwt.sign(entre, config["secret"], {
					     expiresIn: 86400 // expires in 24 hours
            });
            //console.log(entre.eEmail);
            //userEmail = entre.eEmail;
				    res.json({
					       success: true,
					       message: 'Authenticated',
					       token: token
				     });
          }
          else if(!result){
            console.log("passwords don't match");
            res.end("passwords don't match");
          }
        })
      }
    })
  }
  
});

router.use(function(req, res, next) {

	var token = req.body.token || req.param('token') || req.headers['x-access-token'];
 
	if (token) {

		jwt.verify(token, config["secret"], function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
        req.decoded = decoded;
        userEmail = decoded['_doc'].eEmail;
        module.exports.email = userEmail;
				next();
      }  
		});
	} else {

		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});

var forms = require('../Modules/forms.js')(router, mongo);


router.get('/logout', function(req, res){
  console.log('You are on the logout page');
  res.send('You are on the logout page');
});

router.get('/user', function(req, res, next) {
  console.log('You are on the user page');
  res.send('You are on the user page');
});

module.exports.router = router; 
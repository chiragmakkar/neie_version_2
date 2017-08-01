var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('You are on the homepage');
  res.send('You are on the homepage');
});

router.get('/register',function(req, res){
  console.log('You are on the register page');
  res.send('You are on the register page');
});

router.get('/login',function(req, res){
  console.log('You are on the login page');
  res.send('You are on the login page');
});

router.get('/logout', function(req, res){
  console.log('You are on the logout page');
  res.send('You are on the logout page');
});

router.get('/polls', function(req, res){
  console.log('You are on the polls page');
  res.send('You are on the polls page');
})

router.get('/user', function(req, res, next) {
  console.log('You are on the user page');
  res.send('You are on the user page');
});

module.exports = router;
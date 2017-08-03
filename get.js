module.exports = function(router, mongo) {

router.get('/', function(req, res) {
  console.log('You are on the homepage');
  console.log(__dirname);
  res.sendFile( __dirname+'/views/dashboardEntrepreneur.html');
});

}
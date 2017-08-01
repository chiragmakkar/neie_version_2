const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get('/', function(req, res){
	res.send("NEIE version 2 is now live");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
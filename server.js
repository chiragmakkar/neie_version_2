const express = require('express');
const app = express();
const bodyParser = require("body-parser");

var routes = require('./routes/index.js').router;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use('/',routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
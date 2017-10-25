var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/visa', function (req, res) {

  var params = req.body.result.parameters;
  res.setHeader('Content-Type', 'application/json');

  var deliveryTime = calculateDeliveryTime();

  response = `Your Visa for ${params.geoCountry} will be ready in ${deliveryTime}`;
  res.send({ "speech": response, "displayText": response});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function calculateDeliveryTime() {
  // Make call to database etc
  return "one week";
}

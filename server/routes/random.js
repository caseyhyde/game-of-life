var https = require('https');
var http = require('http');
var express = require('express');
var router = express.Router();
var request = require('request');

var options = {
  url: 'https://api.random.org/json-rpc/1/invoke',
  method: 'POST',
  json: true,
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
      "apiKey": 'c5c6dd1d-5509-4e6e-ad12-12b0357b5cf4',
      "n": 10,
      "min": 0,
      "max": 2500,
      "replacement": false
    },
    "id": 42
  }
};

function callback(error, response, body) {
  if(!error && response.statusCode == 200) {
    console.log('body: ', body);
    console.log("data: ", body.result.random);
  } else console.log(error);
}


router.get('/', function(req, res) {
  console.log('random.api get route hit');
  request.post(options, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      console.log(body);
      res.send(body.result.random);
    }
  });
});

module.exports = router;

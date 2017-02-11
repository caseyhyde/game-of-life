var https = require('https');
var http = require('http');
var express = require('express');
var router = express.Router();

var options = {
  host: 'api.random.org',
  path: '/json-rpc/1/invoke',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json-rpc'
  },
  body: {
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
      "apiKey": 'c5c6dd1d-5509-4e6e-ad12-12b0357b5cf4',
      "n": 10,
      "min": 1,
      "max": 30,
      "replacement": false
    }
  }
}

router.get('/', function(req, res) {
  console.log('random.api get route hit');
  http.request(options, function(a, b, c) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
  }).end();
});

module.exports = router;

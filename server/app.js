const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const LOCALPORT = 3000;
const randomApi = require('./routes/random');
var portDecision = process.env.PORT || LOCALPORT;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});//end route

app.use('/random', randomApi);

app.listen(portDecision, function() {
  console.log("listening on port: ", portDecision);
});

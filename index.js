// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function(req, res) {
  const ip = req.ip;
  const language = req.lang;

  let json = {ipaddress: ip, language: language};
  res.json({ipaddress: ip, "language": "en-US,en;q=0.5", "software":"Edge"});
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 63342, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000; // environment variable access with node js

// Express midleware
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    // Redirect request to HTTP
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

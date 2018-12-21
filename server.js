const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.user(express.static(__dirname + "/dist"));

app.get(/.*/, function( request, response) {
  response.sendfile(__dirname + "/dist/index.html");
});

app.listen(port, function() {
  console.log('Server vues1tutorial.')
});

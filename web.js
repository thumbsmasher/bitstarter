var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //console.log('reading file... \n');
  fs.readFile('./index.html', 'utf8', function (err, data) {
    response.send(data);
  });  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

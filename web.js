var express = require('/home/ubuntu/node_modules/express');
var fs = require('fs');
var htmlfile = "index.html";
var app = express(express.logger());
app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlFile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("listening on " + port);
});

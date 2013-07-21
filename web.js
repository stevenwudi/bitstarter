var express = require('express');
var app = express();
var fs=require('fs');

file='index.hmtl';

var buffer = new Buffer(fs.readFileSync(file));


app.use(express.logger());

app.get('/', function(request, response) {
    response.send(buffer.toString('utf-8'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

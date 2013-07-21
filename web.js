var express = require('express');
var app = express();
var buffer = new Buffer(fs.readFileSync('index.html'));



app.use(express.logger());

app.get('/', function(request, response) {
//response.send("Hello world");};
response.send(buffer.toString('utf-8'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

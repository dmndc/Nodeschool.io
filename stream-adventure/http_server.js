var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (buffer, _, next) {
      this.push(buffer.toString().toUpperCase());
        next();
      })).pipe(res);
  }
  else res.end('Send me a POST request\n');
});

server.listen(parseInt(process.argv[2]));

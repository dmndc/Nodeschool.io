var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (chunk, _, next) {
            this.push(chunk.toString().toUpperCase());
            next();
        })).pipe(res);
    }
    else res.end('Send me a POST request\n');
});

server.listen(parseInt(process.argv[2]));

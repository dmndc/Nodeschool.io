var through = require('through2');
var split = require('split');

var counter = 0;

var transform = through(function(line, _, next) {
  if (counter % 2 === 0) {
    this.push(line.toString().toLowerCase());
  } else {
    this.push(line.toString().toUpperCase());
  }
  this.push('\n');
  counter++;
  next();
});

process.stdin
  .pipe(split())
  .pipe(transform)
  .pipe(process.stdout);

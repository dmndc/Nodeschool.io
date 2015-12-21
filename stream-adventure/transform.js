// var through = require('through2');
// var stream = through(write, end);
//
// var upperCase = function(buffer) {
//     this.queue(buffer.toString().toUpperCase());
// };
//
// process.stdin
//     .pipe(through(upperCase))
//     .pipe(process.stdout);

// var through = require('through')
// var tr = through(write);
//
// function write (buf) {
//   this.queue(buf.toString().toUpperCase());
// }
//
// process.stdin.pipe(tr).pipe(process.stdout);

var through = require('through');

process.stdin.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase());
}, function () {
  this.queue(null);
})).pipe(process.stdout);

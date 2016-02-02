var octets = process.argv.slice(2).map(Number);
console.log(new Buffer(octets).toString('hex'));

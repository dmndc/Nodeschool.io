var octets = process.argv.slice(2);
console.log(new Buffer(octets).toString('hex'));

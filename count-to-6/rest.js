module.exports = function average(...args) {
  var sum = 0;

  args.forEach(function(value) {
    sum += value;
  });

  return sum / args.length;
};

// official solution

module.exports = (...args) => {
  var sum = args.reduce((soFar, value) => soFar + value, 0);
  return sum / args.length;
};

var _ = require('lodash');

var reduce = function(collection) {
  return _.reduce(collection, function(acc, value, key) {
    return acc[key] = value;

  });
};



module.exports = reduce;

var _ = require('lodash');

var sortFunc = function(objects) {
  return _.sortBy(objects, 'quantity').reverse();
};

module.exports = sortFunc;

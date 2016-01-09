var _ = require('lodash');

var filterWhere = function(objects) {
  return _.where(objects, { 'active': true });
};

module.exports = filterWhere;

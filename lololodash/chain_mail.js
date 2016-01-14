var _ = require('lodash');

module.exports = function(words) {
  var chained = _.chain(words)
    .map(function(el) {
      el = el + 'chained';
      return el.toUpperCase();
    })
    .sortBy()
    .value();

  return chained;
}

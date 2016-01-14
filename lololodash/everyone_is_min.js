var _ = require('lodash');

module.exports = function(item) {
  var result = {
    hot: [],
    warm: []
  };

  function checkTemp(item) {
    return item > 19;
  }

  _.forEach(item, function (town, townname) {

      if (_.every(town, checkTemp)) {
          result.hot.push(townname);
      } else if (_.some(town, checkTemp)) {
          result.warm.push(townname);
      }

  });

  return result;

};

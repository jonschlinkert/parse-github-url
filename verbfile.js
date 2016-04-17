'use strict';

var path = require('path');

module.exports = function(verb) {
  verb.helper('renderExamples', function(fp) {
    return require(path.resolve(fp))();
  });
};

'use strict';

var path = require('path');

module.exports = function (verb) {
	verb.use(require('verb-generate-readme'));
	verb.helper('renderExamples', function (fp) {
		return require(path.resolve(fp))().trim();
	});
	verb.task('default', ['readme']);
};

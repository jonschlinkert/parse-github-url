'use strict';

var test = require('tape');
var urlParse = require('url').parse;
var parseURL = require('../parse-url');

test('parse-url', function (t) {
	t.test('matches url.parse() for key properties:', function (st) {
		var props = ['auth', 'hash', 'host', 'hostname', 'path', 'pathname', 'protocol', 'slashes'];
		var urls = [
			'https://github.com/assemble/verb.git',
			'git://github.com/assemble/verb.git',
			'git@github.com:assemble/verb.git',
			'github:user/repo',
			'assemble/verb',
			'foo:bar',
			'assemble/verb?tab=readme',
			'assemble/verb?tab=readme#section',
			'git@github.com:assemble/verb.git?foo=bar'
		];

		urls.forEach(function (url) {
			var expected = urlParse(url);
			var actual = parseURL(url);
			props.forEach(function (prop) {
				st.equal(actual[prop], expected[prop], url + ' — ' + prop);
			});
		});

		st.end();
	});
});

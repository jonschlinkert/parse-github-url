'use strict';

var util = require('util');
var gh = require('./');

var formats = [
  'assemble/verb#1.2.3',
  'assemble/verb#branch',
  'assemble/verb',
  'git+https://github.com/assemble/verb.git',
  'git+ssh://github.com/assemble/verb.git',
  'git://gh.pages.com/assemble/verb.git',
  'git://github.assemble.com/assemble/verb.git',
  'git://github.assemble.two.com/assemble/verb.git',
  'git://github.com/assemble/verb',
  'git://github.com/assemble/verb.git',
  'git@gh.pages.com:assemble/verb.git',
  'git@github.com:assemble/verb.git#1.2.3',
  'git@github.com:assemble/verb.git#v1.2.3',
  'git@github.com:assemble/verb.git',
  'github:assemble/verb',
  'http://github.com/assemble',
  'http://github.com/assemble/verb',
  'http://github.com/assemble/verb.git',
  'http://github.com/assemble/verb/tree',
  'http://github.com/assemble/verb/tree/master',
  'http://github.com/assemble/verb/tree/master/foo/bar',
  'https://assemble.github.com/assemble/verb/somefile.tar.gz',
  'https://assemble.github.com/assemble/verb/somefile.zip',
  'https://assemble@github.com/assemble/verb.git',
  'https://gh.pages.com/assemble/verb.git',
  'https://github.com/assemble/verb',
  'https://github.com/assemble/verb.git',
  'https://github.com/assemble/verb/blob/1.2.3/README.md',
  'https://github.com/assemble/verb/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md',
  'https://github.com/assemble/verb/blob/master/assemble/index.js',
  'https://github.com/assemble/verb/tree/1.2.3',
  'https://github.com/assemble/verb/tree/feature/1.2.3',
  'https://github.com/repos/assemble/verb/tarball',
  'https://github.com/repos/assemble/verb/zipball',
];

var res = '```js';
formats.forEach(function (url) {
  res += '\n// ' + url + '\n' + JSON.stringify(gh(url), null, 2) + '\n';
});

res += '```\n'

console.log(res);

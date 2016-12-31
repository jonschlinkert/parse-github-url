# parse-github-url [![NPM version](https://img.shields.io/npm/v/parse-github-url.svg?style=flat)](https://www.npmjs.com/package/parse-github-url) [![NPM monthly downloads](https://img.shields.io/npm/dm/parse-github-url.svg?style=flat)](https://npmjs.org/package/parse-github-url)  [![NPM total downloads](https://img.shields.io/npm/dt/parse-github-url.svg?style=flat)](https://npmjs.org/package/parse-github-url) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/parse-github-url.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/parse-github-url)

> Parse a github URL into an object.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save parse-github-url
```

**HEADS UP! Breaking changes in 0.3.0!!!**

See the [release history](#history) for details.

**Why another GitHub URL parser library?**

Seems like every lib I've found does too much, like both stringifying and parsing, or converts the URL from one format to another, only returns certain segments of the URL except for what I need, yields inconsistent results or has poor coverage.

## Usage

```js
var gh = require('parse-github-url');
gh('https://github.com/jonschlinkert/micromatch');
```

Results in:

```js
{
  "owner": "jonschlinkert",
  "name": "micromatch",
  "repo": "jonschlinkert/micromatch",
  "branch": "master"
}
```

## Example results

Generated results from test fixtures:

```js
// assemble/verb#1.2.3
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: null,
  hash: '#1.2.3',
  search: null,
  query: null,
  pathname: 'assemble/verb',
  path: 'assemble/verb',
  href: 'assemble/verb#1.2.3',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: '1.2.3',
  repository: 'assemble/verb' }

// assemble/verb#branch
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: null,
  hash: '#branch',
  search: null,
  query: null,
  pathname: 'assemble/verb',
  path: 'assemble/verb',
  href: 'assemble/verb#branch',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'branch',
  repository: 'assemble/verb' }

// assemble/verb
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb',
  path: 'assemble/verb',
  href: 'assemble/verb',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git+https://github.com/assemble/verb.git
Url {
  protocol: 'git+https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'git+https://github.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git+ssh://github.com/assemble/verb.git
Url {
  protocol: 'git+ssh:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'git+ssh://github.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git://gh.pages.com/assemble/verb.git
Url {
  protocol: 'git:',
  slashes: true,
  auth: null,
  host: 'gh.pages.com',
  port: null,
  hostname: 'gh.pages.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'git://gh.pages.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git://github.assemble.com/assemble/verb.git
Url {
  protocol: 'git:',
  slashes: true,
  auth: null,
  host: 'github.assemble.com',
  port: null,
  hostname: 'github.assemble.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'git://github.assemble.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git://github.assemble.two.com/assemble/verb.git
Url {
  protocol: 'git:',
  slashes: true,
  auth: null,
  host: 'github.assemble.two.com',
  port: null,
  hostname: 'github.assemble.two.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'git://github.assemble.two.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git://github.com/assemble/verb
Url {
  protocol: 'git:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb',
  path: 'assemble/verb',
  href: 'git://github.com/assemble/verb',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git://github.com/assemble/verb.git
Url {
  protocol: 'git:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'git://github.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git@gh.pages.com:assemble/verb.git
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: 'git@gh.pages.com:assemble/verb.git',
  path: 'git@gh.pages.com:assemble/verb.git',
  href: 'git@gh.pages.com:assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// git@github.com:assemble/verb.git#1.2.3
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: null,
  hash: '#1.2.3',
  search: null,
  query: null,
  pathname: 'git@github.com:assemble/verb.git',
  path: 'git@github.com:assemble/verb.git',
  href: 'git@github.com:assemble/verb.git#1.2.3',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: '1.2.3',
  repository: 'assemble/verb' }

// git@github.com:assemble/verb.git#v1.2.3
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: null,
  hash: '#v1.2.3',
  search: null,
  query: null,
  pathname: 'git@github.com:assemble/verb.git',
  path: 'git@github.com:assemble/verb.git',
  href: 'git@github.com:assemble/verb.git#v1.2.3',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'v1.2.3',
  repository: 'assemble/verb' }

// git@github.com:assemble/verb.git
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: 'git@github.com:assemble/verb.git',
  path: 'git@github.com:assemble/verb.git',
  href: 'git@github.com:assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// github:assemble/verb
Url {
  protocol: 'github:',
  slashes: null,
  auth: null,
  host: 'assemble',
  port: null,
  hostname: 'assemble',
  hash: null,
  search: null,
  query: null,
  pathname: 'verb',
  path: 'verb',
  href: 'github:assemble/verb',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// http://github.com/assemble
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble',
  path: 'assemble',
  href: 'http://github.com/assemble',
  filepath: null,
  owner: 'assemble',
  name: null,
  repo: null,
  branch: 'master',
  repository: null }

// http://github.com/assemble/verb
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb',
  path: 'assemble/verb',
  href: 'http://github.com/assemble/verb',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// http://github.com/assemble/verb.git
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'http://github.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// http://github.com/assemble/verb/tree
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/tree',
  path: 'assemble/verb/tree',
  href: 'http://github.com/assemble/verb/tree',
  filepath: null,
  branch: 'tree',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  repository: 'assemble/verb' }

// http://github.com/assemble/verb/tree/master
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/tree/master',
  path: 'assemble/verb/tree/master',
  href: 'http://github.com/assemble/verb/tree/master',
  filepath: null,
  branch: 'master',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  repository: 'assemble/verb' }

// http://github.com/assemble/verb/tree/master/foo/bar
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/tree/master/foo/bar',
  path: 'assemble/verb/tree/master/foo/bar',
  href: 'http://github.com/assemble/verb/tree/master/foo/bar',
  filepath: null,
  branch: 'master',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  repository: 'assemble/verb' }

// https://assemble.github.com/assemble/verb/somefile.tar.gz
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'assemble.github.com',
  port: null,
  hostname: 'assemble.github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/somefile.tar.gz',
  path: 'assemble/verb/somefile.tar.gz',
  href: 'https://assemble.github.com/assemble/verb/somefile.tar.gz',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'somefile.tar.gz',
  repository: 'assemble/verb' }

// https://assemble.github.com/assemble/verb/somefile.zip
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'assemble.github.com',
  port: null,
  hostname: 'assemble.github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/somefile.zip',
  path: 'assemble/verb/somefile.zip',
  href: 'https://assemble.github.com/assemble/verb/somefile.zip',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'somefile.zip',
  repository: 'assemble/verb' }

// https://assemble@github.com/assemble/verb.git
Url {
  protocol: 'https:',
  slashes: true,
  auth: 'assemble',
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'https://assemble@github.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// https://gh.pages.com/assemble/verb.git
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'gh.pages.com',
  port: null,
  hostname: 'gh.pages.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'https://gh.pages.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// https://github.com/assemble/verb
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb',
  path: 'assemble/verb',
  href: 'https://github.com/assemble/verb',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// https://github.com/assemble/verb.git
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb.git',
  path: 'assemble/verb.git',
  href: 'https://github.com/assemble/verb.git',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'master',
  repository: 'assemble/verb' }

// https://github.com/assemble/verb/blob/1.2.3/README.md
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/blob/1.2.3/README.md',
  path: 'assemble/verb/blob/1.2.3/README.md',
  href: 'https://github.com/assemble/verb/blob/1.2.3/README.md',
  filepath: 'README.md',
  branch: '1.2.3',
  blob: '1.2.3/README.md',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  repository: 'assemble/verb' }

// https://github.com/assemble/verb/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md',
  path: 'assemble/verb/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md',
  href: 'https://github.com/assemble/verb/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md',
  filepath: '249b21a86400b38969cee3d5df6d2edf8813c137/README.md',
  blob: '249b21a86400b38969cee3d5df6d2edf8813c137/README.md',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'blob',
  repository: 'assemble/verb' }

// https://github.com/assemble/verb/blob/master/assemble/index.js
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/blob/master/assemble/index.js',
  path: 'assemble/verb/blob/master/assemble/index.js',
  href: 'https://github.com/assemble/verb/blob/master/assemble/index.js',
  filepath: 'assemble/index.js',
  branch: 'master',
  blob: 'master/assemble/index.js',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  repository: 'assemble/verb' }

// https://github.com/assemble/verb/tree/1.2.3
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/tree/1.2.3',
  path: 'assemble/verb/tree/1.2.3',
  href: 'https://github.com/assemble/verb/tree/1.2.3',
  filepath: null,
  branch: '1.2.3',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  repository: 'assemble/verb' }

// https://github.com/assemble/verb/tree/feature/1.2.3
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'assemble/verb/tree/feature/1.2.3',
  path: 'assemble/verb/tree/feature/1.2.3',
  href: 'https://github.com/assemble/verb/tree/feature/1.2.3',
  filepath: null,
  branch: 'feature',
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  repository: 'assemble/verb' }

// https://github.com/repos/assemble/verb/tarball
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'repos/assemble/verb/tarball',
  path: 'assemble/verb/tarball',
  href: 'https://github.com/repos/assemble/verb/tarball',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'tarball',
  repository: 'assemble/verb' }

// https://github.com/repos/assemble/verb/zipball
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'repos/assemble/verb/zipball',
  path: 'assemble/verb/zipball',
  href: 'https://github.com/repos/assemble/verb/zipball',
  filepath: null,
  owner: 'assemble',
  name: 'verb',
  repo: 'assemble/verb',
  branch: 'zipball',
  repository: 'assemble/verb' }
```

## History

**v0.3.0**

To be more consistent with node.js/package.json conventions, the following properties were renamed in `v0.3.0`:

* `repo` is now `name` (project name)
* `repopath` is now `repository` (project repository)
* `user` is now `owner` (project owner or org)

## About

### Related projects

* [github-short-url-regex](https://www.npmjs.com/package/github-short-url-regex): Regular expression (Regex) for matching github shorthand (user/repo#branch). | [homepage](https://github.com/regexps/github-short-url-regex "Regular expression (Regex) for matching github shorthand (user/repo#branch).")
* [is-git-url](https://www.npmjs.com/package/is-git-url): Regex to validate that a URL is a git url. | [homepage](https://github.com/jonschlinkert/is-git-url "Regex to validate that a URL is a git url.")
* [parse-github-short-url](https://www.npmjs.com/package/parse-github-short-url): Parse a github/npm shorthand (user/repo#branch or user/repo@version) URL into an object. | [homepage](https://github.com/tunnckocore/parse-github-short-url#readme "Parse a github/npm shorthand (user/repo#branch or user/repo@version) URL into an object.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 16 | [jonschlinkert](https://github.com/jonschlinkert) |
| 4 | [doowb](https://github.com/doowb) |
| 3 | [adjohnson916](https://github.com/adjohnson916) |
| 2 | [alferov](https://github.com/alferov) |
| 1 | [jeremyruppel](https://github.com/jeremyruppel) |
| 1 | [willbar](https://github.com/willbar) |

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.1, on December 31, 2016._
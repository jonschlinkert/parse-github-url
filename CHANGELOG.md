# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.3](https://github.com/jonschlinkert/parse-github-url/compare/v1.0.2...v1.0.3) - 2024-06-26

### Fixed

- [Fix] avoid node 22 `url.parse` deprecation warning [`#30`](https://github.com/jonschlinkert/parse-github-url/issues/30) [`#15`](https://github.com/jonschlinkert/parse-github-url/issues/15)
- [meta] create SECURITY.md [`#27`](https://github.com/jonschlinkert/parse-github-url/issues/27)
- [Fix] Handle blob and tree being in owner and project name [`#16`](https://github.com/jonschlinkert/parse-github-url/issues/16)

### Commits

- [eslint] add eslint [`06c2423`](https://github.com/jonschlinkert/parse-github-url/commit/06c242362b48b0cd451839d02a6ad7ccdf59036f)
- [readme] update readme [`e764de9`](https://github.com/jonschlinkert/parse-github-url/commit/e764de908c4710063e7cae49b77282ce6272c5d0)
- [meta] use `auto-changelog` [`12b542f`](https://github.com/jonschlinkert/parse-github-url/commit/12b542f7b5314a19e7b45d7b96b15639b1d6ec87)
- [Tests] migrate from travis to GHA [`10b3f6c`](https://github.com/jonschlinkert/parse-github-url/commit/10b3f6cff40d665800e7137624672f75c53ec350)
- [Tests] switch from mocha to tape [`6da7b67`](https://github.com/jonschlinkert/parse-github-url/commit/6da7b67202a370496d9dfb1b5a1db1a15c6acefa)
- Only apps should have lockfiles [`1a7063e`](https://github.com/jonschlinkert/parse-github-url/commit/1a7063e315e990a204d2b165221e5fe167eac127)
- [Robustness] use a null object cache [`4d46f90`](https://github.com/jonschlinkert/parse-github-url/commit/4d46f909a9fbd4fe37de6cbe3c374d87f74dd2e9)
- [Fix] properly parse a repo whose name starts with a dot [`abcd683`](https://github.com/jonschlinkert/parse-github-url/commit/abcd683ea0008bb44573d570fb3e96945208f3a3)

## [v1.0.2](https://github.com/jonschlinkert/parse-github-url/compare/v1.0.1...v1.0.2) - 2017-12-08

### Merged

- add cli support [`#12`](https://github.com/jonschlinkert/parse-github-url/pull/12)

### Commits

- run verb to generate readme [`bd83ee0`](https://github.com/jonschlinkert/parse-github-url/commit/bd83ee0b993fce93df89c44b4dc04d98a4bbacd0)
- run update [`d39790c`](https://github.com/jonschlinkert/parse-github-url/commit/d39790c0317ff0343edb3131263ac5083b220228)

## [v1.0.1](https://github.com/jonschlinkert/parse-github-url/compare/v1.0.0...v1.0.1) - 2017-10-31

### Merged

- Return the correct host for git@ URLs [`#11`](https://github.com/jonschlinkert/parse-github-url/pull/11)

### Fixed

- Return the correct host for git@ URLs [`#10`](https://github.com/jonschlinkert/parse-github-url/issues/10)

### Commits

- upgrade devDependencies, run `update` [`bd5041e`](https://github.com/jonschlinkert/parse-github-url/commit/bd5041eddaee3ea706d4ca393b83d2238135eda8)

## [v1.0.0](https://github.com/jonschlinkert/parse-github-url/compare/v0.3.2...v1.0.0) - 2016-12-31

### Merged

- Add support of filepath [`#9`](https://github.com/jonschlinkert/parse-github-url/pull/9)

### Commits

- update docs [`06cdebd`](https://github.com/jonschlinkert/parse-github-url/commit/06cdebdae3af75ed955c6cb4273ffd47781a9c82)
- run update [`b983cb9`](https://github.com/jonschlinkert/parse-github-url/commit/b983cb923be0485497c561167293262efd170b58)
- lint, improve `branch` handling [`0b4e914`](https://github.com/jonschlinkert/parse-github-url/commit/0b4e914775452969f9cbef78a3fdf82b64f99c9a)
- Add suppot of filepath [`e4fba1f`](https://github.com/jonschlinkert/parse-github-url/commit/e4fba1f2efdb82fe105a12c310bb7d6edd2d4e0c)

## [v0.3.2](https://github.com/jonschlinkert/parse-github-url/compare/v0.3.1...v0.3.2) - 2016-09-02

### Merged

- Return null for URLs not containing a path [`#7`](https://github.com/jonschlinkert/parse-github-url/pull/7)

## [v0.3.1](https://github.com/jonschlinkert/parse-github-url/compare/v0.3.0...v0.3.1) - 2016-04-17

### Merged

- Include host in the result object [`#5`](https://github.com/jonschlinkert/parse-github-url/pull/5)

### Fixed

- closes https://github.com/jonschlinkert/parse-github-url/pull/1 [`#1`](https://github.com/jonschlinkert/parse-github-url/pull/1)

### Commits

- run update, update docs and metadata [`d217378`](https://github.com/jonschlinkert/parse-github-url/commit/d217378945f92ae11174e329ef1cda073f469d89)
- update eslint [`4067246`](https://github.com/jonschlinkert/parse-github-url/commit/4067246cb182fa53507fd84472c2433e255a6052)

## [v0.3.0](https://github.com/jonschlinkert/parse-github-url/compare/v0.2.1...v0.3.0) - 2016-01-17

### Commits

- generate docs with verb [`6471223`](https://github.com/jonschlinkert/parse-github-url/commit/647122315c3f19818e009ea0e93819e867b7b69d)
- breaking changes! [`f69a78a`](https://github.com/jonschlinkert/parse-github-url/commit/f69a78a400fbb73a9ba04312cf252ae4b17775e2)
- run `update`, add verb config [`0124622`](https://github.com/jonschlinkert/parse-github-url/commit/012462262cf438a15424c40b7c08ecbc743831b1)
- run `update`, add verb config [`ff9cef9`](https://github.com/jonschlinkert/parse-github-url/commit/ff9cef98a6c81048d95b795319d2ddf76f2b5544)

## [v0.2.1](https://github.com/jonschlinkert/parse-github-url/compare/v0.2.0...v0.2.1) - 2015-10-17

### Merged

- Return null if user is undefined [`#4`](https://github.com/jonschlinkert/parse-github-url/pull/4)

### Commits

- Add tests [`23a2f5c`](https://github.com/jonschlinkert/parse-github-url/commit/23a2f5ce9bd2d12884aad936ce7c2bcb557d2601)

## [v0.2.0](https://github.com/jonschlinkert/parse-github-url/compare/v0.1.1...v0.2.0) - 2015-10-12

### Commits

- add failing tests [`a56639a`](https://github.com/jonschlinkert/parse-github-url/commit/a56639a8a79f12d6cb5e169ffe38e919d63c3ab3)
- adding tests with a commit hash for githubusercontent.com files [`23e4319`](https://github.com/jonschlinkert/parse-github-url/commit/23e431939908b7110de3183d74c10a863f1fd1a4)
- add fix for branches on githubusercontent.com [`c0848fa`](https://github.com/jonschlinkert/parse-github-url/commit/c0848fa34142a5b8f44fc23218af3cd91f711147)

## [v0.1.1](https://github.com/jonschlinkert/parse-github-url/compare/v0.1.0...v0.1.1) - 2015-06-28

### Merged

- Handle dots in repo. Fixes #2. [`#3`](https://github.com/jonschlinkert/parse-github-url/pull/3)

### Fixed

- Merge pull request #3 from adjohnson916/dotted-repo [`#2`](https://github.com/jonschlinkert/parse-github-url/issues/2)
- Handle dots in repo. Fixes #2. [`#2`](https://github.com/jonschlinkert/parse-github-url/issues/2)

### Commits

- test cases [`7679698`](https://github.com/jonschlinkert/parse-github-url/commit/7679698e0f97b1019fc5141e3325ab7ea5c65b19)

## v0.1.0 - 2015-03-14

### Commits

- first commit [`2306e5d`](https://github.com/jonschlinkert/parse-github-url/commit/2306e5d524cb535c6afc5c8b931b52c49cf0a8c7)

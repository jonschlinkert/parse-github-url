'use strict';

var test = require('tape');

var gh = require('../');

test('parse-github-url', function (t) {
	t.equal(gh('toString').href, 'toString');

	t.test('gets the user:', function (assert) {
		assert.equal(gh(''), null);
		assert.equal(gh('https://github.com/jonschlinkert/micromatch').owner, 'jonschlinkert');
		assert.equal(gh('git@github.com:assemble/verb.git').owner, 'assemble');
		assert.equal(gh('assemble/verb#branch').owner, 'assemble');
		assert.equal(gh('assemble/verb#dev').owner, 'assemble');
		assert.equal(gh('assemble/verb').owner, 'assemble');
		assert.equal(gh('git+https://github.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('git+ssh://github.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('git://gh.pages.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('git://github.com/assemble/verb').owner, 'assemble');
		assert.equal(gh('git://github.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('git://github.com/foo/bar.git').owner, 'foo');
		assert.equal(gh('git://github.one.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('git://github.one.two.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('git@gh.pages.com:assemble/verb.git').owner, 'assemble');
		assert.equal(gh('git@gist.github.com:9284722.git'), null);
		assert.equal(gh('git@github.com:assemble/verb.git#0.6.0').owner, 'assemble');
		assert.equal(gh('git@github.com:assemble/verb.git#v0.6.0').owner, 'assemble');
		assert.equal(gh('git@github.com:assemble/verb.git').owner, 'assemble');
		assert.equal(gh('github:user/repo').owner, 'user');
		assert.equal(gh('http://github.com/assemble/verb').owner, 'assemble');
		assert.equal(gh('http://github.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('http://github.com/assemble/verb/tree').owner, 'assemble');
		assert.equal(gh('http://github.com/assemble/verb/tree/master').owner, 'assemble');
		assert.equal(gh('http://github.com/assemble/verb/tree/master/foo/bar').owner, 'assemble');
		assert.equal(gh('https://assemble@github.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('https://foo.github.com/assemble/verb/bar.tar.gz').owner, 'assemble');
		assert.equal(gh('https://foo.github.com/assemble/verb/bar.zip').owner, 'assemble');
		assert.equal(gh('https://gh.pages.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('https://gist.github.com/9284722.git'), null);
		assert.equal(gh('https://github.com/assemble/verb').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb.git').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb/blob/master/assemble/index.js').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb/blob/master/foo/index.js').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb/blob/v1.0.0/README.md').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb/tree/0.2.0').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb/tree/dev').owner, 'assemble');
		assert.equal(gh('https://github.com/assemble/verb/tree/feature/dev').owner, 'assemble');
		assert.equal(gh('https://github.com/repos/assemble/verb/tarball').owner, 'assemble');
		assert.equal(gh('https://github.com/repos/assemble/verb/zipball').owner, 'assemble');
		assert.equal(gh('foo:bar'), null);
		assert.equal(gh(), null);
		assert.equal(gh(null), null);
		assert.equal(gh(undefined), null);

		assert.end();
	});

	t.test('gets the branch:', function (assert) {
		assert.equal(gh('assemble/verb#branch').branch, 'branch');
		assert.equal(gh('assemble/verb#dev').branch, 'dev');
		assert.equal(gh('git@github.com:assemble/verb.git#0.6.0').branch, '0.6.0');
		assert.equal(gh('git@github.com:assemble/verb.git#v0.6.0').branch, 'v0.6.0');
		assert.equal(gh('https://github.com/assemble/verb/blob/foo/README.md').branch, 'foo');
		assert.equal(gh('https://github.com/assemble/verb/tree/dev').branch, 'dev');
		assert.equal(gh('https://github.com/assemble/verb/tree/feature/dev').branch, 'feature');
		assert.equal(gh('https://github.com/assemble/verb/tree/foo').branch, 'foo');
		assert.equal(gh('https://raw.githubusercontent.com/assemble/verb/dev').branch, 'dev');
		assert.equal(gh('https://raw.githubusercontent.com/assemble/verb/4d0ebde055557a0d1d988c01e0f070df8cc8fa07').branch, '4d0ebde055557a0d1d988c01e0f070df8cc8fa07');
		assert.equal(gh('https://raw.githubusercontent.com/assemble/verb/4d0ebde055557a0d1d988c01e0f070df8cc8fa07/README.md').branch, '4d0ebde055557a0d1d988c01e0f070df8cc8fa07');
		assert.equal(gh('https://raw.githubusercontent.com/assemble/verb/dev/README.md').branch, 'dev');
		assert.equal(gh('https://github.com/contentful/extensions/blob/master/samples/content-tree/extension.json').branch, 'master');

		assert.end();
	});

	t.test('gets the filepath:', function (assert) {
		assert.equal(gh('assemble/verb#branch').filepath, null);
		assert.equal(gh('git@github.com:assemble/verb.git#0.6.0').filepath, null);
		assert.equal(gh('https://github.com/assemble/verb/blob/foo/README.md').filepath, 'README.md');
		assert.equal(gh('https://github.com/assemble/verb/blob/foo/').filepath, null);
		assert.equal(gh('https://github.com/assemble/verb/blob/foo').filepath, null);
		assert.equal(gh('https://github.com/assemble/verb/blob/foo/bar/README.md').filepath, 'bar/README.md');
		assert.equal(gh('https://github.com/assemble/verb/tree/dev').filepath, null);
		assert.equal(gh('https://raw.githubusercontent.com/assemble/verb/dev/README.md').filepath, 'README.md');
		assert.equal(gh('https://raw.githubusercontent.com/assemble/verb/dev/bar/README.md').filepath, 'bar/README.md');
		assert.equal(gh('https://github.com/owner/blob/blob/foo/README.md').filepath, 'README.md');
		assert.equal(gh('https://github.com/blob/project/blob/foo/README.md').filepath, 'README.md');
		assert.equal(gh('https://github.com/owner/tree/tree/foo/README.md').filepath, null);
		assert.equal(gh('https://github.com/tree/project/tree/foo/README.md').filepath, null);
		assert.equal(gh('https://raw.githubusercontent.com/owner/tree/dev/README.md').filepath, 'README.md');
		assert.equal(gh('https://raw.githubusercontent.com/tree/project/dev/README.md').filepath, 'README.md');
		assert.equal(gh('https://raw.githubusercontent.com/owner/blob/dev/README.md').filepath, 'README.md');
		assert.equal(gh('https://raw.githubusercontent.com/blob/project/dev/README.md').filepath, 'README.md');

		assert.end();
	});

	t.test('uses master branch when another branch is not defined:', function (assert) {
		assert.equal(gh('assemble/verb').branch, 'master');
		assert.equal(gh('git://github.com/foo/bar.git').branch, 'master');
		assert.equal(gh('git@github.com:assemble/verb.git').branch, 'master');
		assert.equal(gh('github:assemble/verb').branch, 'master');
		assert.equal(gh('http://github.com/assemble/verb/tree/master').branch, 'master');
		assert.equal(gh('http://github.com/assemble/verb/tree/master/foo/bar').branch, 'master');
		assert.equal(gh('https://github.com/assemble/verb').branch, 'master');
		assert.equal(gh('https://raw.githubusercontent.com/assemble/verb').branch, 'master');
		assert.equal(gh('https://github.com/assemble/verb/blob/master/foo/index.js').branch, 'master');

		assert.end();
	});

	t.test('gets a full repo path:', function (assert) {
		assert.equal(gh('assemble/verb#dev').repo, 'assemble/verb');
		assert.equal(gh('assemble/verb').repo, 'assemble/verb');
		assert.equal(gh('git+https://github.com/assemble/verb.git').repo, 'assemble/verb');
		assert.equal(gh('git+ssh://github.com/assemble/verb.git').repo, 'assemble/verb');
		assert.equal(gh('git://github.com/assemble/verb').repo, 'assemble/verb');
		assert.equal(gh('git://github.com/assemble/verb.git').repo, 'assemble/verb');
		assert.equal(gh('git://github.one.com/assemble/verb.git').repo, 'assemble/verb');
		assert.equal(gh('git://github.one.two.com/assemble/verb.git').repo, 'assemble/verb');

		assert.end();
	});

	t.test('knows when repo is not defined:', function (assert) {
		assert.equal(gh('git+https://github.com/assemble').name, null);
		assert.equal(gh('git+https://github.com/assemble').repo, null);
		assert.equal(gh('git+https://github.com/assemble').owner, 'assemble');
		assert.equal(gh('git+ssh://github.com/assemble').name, null);
		assert.equal(gh('git+ssh://github.com/assemble').repo, null);
		assert.equal(gh('git+ssh://github.com/assemble').owner, 'assemble');
		assert.equal(gh('git://github.com/assemble').name, null);
		assert.equal(gh('git://github.com/assemble').repo, null);
		assert.equal(gh('git://github.com/assemble').owner, 'assemble');
		assert.equal(gh('git://github.one.com/assemble').name, null);
		assert.equal(gh('git://github.one.com/assemble').repo, null);
		assert.equal(gh('git://github.one.com/assemble').owner, 'assemble');
		assert.equal(gh('git://github.one.two.com/assemble').name, null);
		assert.equal(gh('git://github.one.two.com/assemble').repo, null);
		assert.equal(gh('git://github.one.two.com/assemble').owner, 'assemble');
		assert.equal(gh('http://github.com/assemble').name, null);
		assert.equal(gh('http://github.com/assemble').repo, null);
		assert.equal(gh('http://github.com/assemble').repo, null);
		assert.equal(gh('http://github.com/assemble').owner, 'assemble');
		assert.equal(gh('https://github.com').name, null);
		assert.equal(gh('https://github.com').repo, null);
		assert.equal(gh('http://github.com/assemble').owner, 'assemble');
		assert.equal(gh('https://github.com').owner, null);

		assert.end();
	});

	t.test('gets the repo:', function (assert) {
		assert.equal(gh('assemble/verb#branch').name, 'verb');
		assert.equal(gh('assemble/dot.repo#branch').name, 'dot.repo');
		assert.equal(gh('assemble/verb#dev').name, 'verb');
		assert.equal(gh('assemble/dot.repo#dev').name, 'dot.repo');
		assert.equal(gh('assemble/verb').name, 'verb');
		assert.equal(gh('assemble/dot.repo').name, 'dot.repo');
		assert.equal(gh('git+https://github.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('git+https://github.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git+ssh://github.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('git+ssh://github.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git://gh.pages.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('git://gh.pages.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git://github.com/assemble/verb').name, 'verb');
		assert.equal(gh('git://github.com/assemble/dot.repo').name, 'dot.repo');
		assert.equal(gh('git://github.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('git://github.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git://github.com/foo/bar.git').name, 'bar');
		assert.equal(gh('git://github.com/foo/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git://github.one.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('git://github.one.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git://github.one.two.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('git://github.one.two.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git@gh.pages.com:assemble/verb.git').name, 'verb');
		assert.equal(gh('git@gh.pages.com:assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('git@github.com:assemble/verb.git#0.6.0').name, 'verb');
		assert.equal(gh('git@github.com:assemble/dot.repo.git#0.6.0').name, 'dot.repo');
		assert.equal(gh('git@github.com:assemble/verb.git#v0.6.0').name, 'verb');
		assert.equal(gh('git@github.com:assemble/dot.repo.git#v0.6.0').name, 'dot.repo');
		assert.equal(gh('git@github.com:assemble/verb.git').name, 'verb');
		assert.equal(gh('git@github.com:assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('github:assemble/verb').name, 'verb');
		assert.equal(gh('github:assemble/dot.repo').name, 'dot.repo');
		assert.equal(gh('http://github.com/assemble/verb').name, 'verb');
		assert.equal(gh('http://github.com/assemble/dot.repo').name, 'dot.repo');
		assert.equal(gh('http://github.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('http://github.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('http://github.com/assemble/verb/tree').name, 'verb');
		assert.equal(gh('http://github.com/assemble/dot.repo/tree').name, 'dot.repo');
		assert.equal(gh('http://github.com/assemble/verb/tree/master').name, 'verb');
		assert.equal(gh('http://github.com/assemble/dot.repo/tree/master').name, 'dot.repo');
		assert.equal(gh('http://github.com/assemble/verb/tree/master/foo/dev').name, 'verb');
		assert.equal(gh('http://github.com/assemble/dot.repo/tree/master/foo/dev').name, 'dot.repo');
		assert.equal(gh('https://assemble.github.io/assemble/verb/dev.tar.gz').name, 'verb');
		assert.equal(gh('https://assemble.github.io/assemble/dot.repo/dev.tar.gz').name, 'dot.repo');
		assert.equal(gh('https://assemble.github.io/assemble/verb/dev.zip').name, 'verb');
		assert.equal(gh('https://assemble.github.io/assemble/dot.repo/dev.zip').name, 'dot.repo');
		assert.equal(gh('https://assemble@github.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('https://assemble@github.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('https://gh.pages.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('https://gh.pages.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('https://github.com/assemble/verb').name, 'verb');
		assert.equal(gh('https://github.com/assemble/dot.repo').name, 'dot.repo');
		assert.equal(gh('https://github.com/assemble/verb.git').name, 'verb');
		assert.equal(gh('https://github.com/assemble/dot.repo.git').name, 'dot.repo');
		assert.equal(gh('https://github.com/assemble/verb/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md').name, 'verb');
		assert.equal(gh('https://github.com/assemble/dot.repo/blob/249b21a86400b38969cee3d5df6d2edf8813c137/README.md').name, 'dot.repo');
		assert.equal(gh('https://github.com/assemble/verb/blob/master/foo/index.js').name, 'verb');
		assert.equal(gh('https://github.com/assemble/dot.repo/blob/master/foo/index.js').name, 'dot.repo');
		assert.equal(gh('https://github.com/repos/assemble/verb/tarball').name, 'verb');
		assert.equal(gh('https://github.com/repos/assemble/dot.repo/tarball').name, 'dot.repo');
		assert.equal(gh('https://github.com/repos/assemble/verb/zipball').name, 'verb');
		assert.equal(gh('https://github.com/repos/assemble/dot.repo/zipball').name, 'dot.repo');
		assert.equal(gh('SocialGouv/.kontinuous').name, '.kontinuous');

		assert.end();
	});

	t.test('gets the host:', function (assert) {
		assert.equal(gh('git+https://github.com/assemble/verb.git').host, 'github.com');
		assert.equal(gh('git+ssh://github.com/assemble/verb.git').host, 'github.com');
		assert.equal(gh('git://github.com/assemble/verb').host, 'github.com');
		assert.equal(gh('git://github.com/assemble/verb.git').host, 'github.com');
		assert.equal(gh('git://github.one.com/assemble/verb.git').host, 'github.one.com');
		assert.equal(gh('git://github.one.two.com/assemble/verb.git').host, 'github.one.two.com');
		assert.equal(gh('https://github.com/assemble/verb').host, 'github.com');
		assert.equal(gh('https://github.one.com/assemble/verb').host, 'github.one.com');
		assert.equal(gh('https://github.one.two.com/assemble/verb').host, 'github.one.two.com');
		assert.equal(gh('git@gh.pages.com:assemble/verb.git').host, 'gh.pages.com');
		assert.equal(gh('git@gh.pages.com:assemble/dot.repo.git').host, 'gh.pages.com');
		assert.equal(gh('git@bitbucket.org:atlassian/atlaskit.git').host, 'bitbucket.org');
		assert.equal(gh('git@gitlab.com:gitlab-org/gitlab-ce.git').host, 'gitlab.com');

		assert.end();
	});

	t.test('assumes github.com is the host when not provided:', function (assert) {
		assert.equal(gh('assemble/verb').host, 'github.com');

		assert.end();
	});
});

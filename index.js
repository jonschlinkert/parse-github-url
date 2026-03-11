/*!
 * parse-github-url <https://github.com/jonschlinkert/parse-github-url>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var cache = { __proto__: null };

function isChecksum(str) {
	return (/^[a-f0-9]{40}$/i).test(str);
}

function getBranch(str, obj) {
	var segs = str.split('#');
	var branch;
	if (segs.length > 1) {
		branch = segs[segs.length - 1];
	}
	if (!branch && obj.hash && obj.hash.charAt(0) === '#') {
		branch = obj.hash.slice(1);
	}
	return branch || 'master';
}

function trimSlash(path) {
	return path.charAt(0) === '/' ? path.slice(1) : path;
}

function name(str) {
	return str ? str.replace(/\.git$/, '') : null;
}

function owner(str) {
	if (!str) {
		return null;
	}
	var idx = str.indexOf(':');
	if (idx > -1) {
		return str.slice(idx + 1);
	}
	return str;
}

/**
 * Parse a URL string into a url-compatible object using the WHATWG URL API.
 * Falls back to manual parsing for non-standard URL formats.
 */
function parseUrl(str) {
	try {
		var u = new URL(str);
		var auth = null;
		if (u.username) {
			auth = u.password ? (u.username + ':' + u.password) : u.username;
		}
		var host = u.host || null;
		var hostname = u.hostname || null;
		var pathname = u.pathname || null;
		var path = (u.pathname + (u.search || '')) || null;

		// For non-special schemes without '//' (e.g. 'github:user/repo', 'foo:bar'),
		// the WHATWG URL API produces an opaque path (host is empty). Replicate the
		// legacy url.parse() behavior: treat the first path segment as the host.
		if (!host && pathname && str.indexOf('//') === -1) {
			var slashIdx = pathname.indexOf('/');
			if (slashIdx === -1) {
				// e.g. 'foo:bar' — no path segment, only a host-like token → null path
				host = pathname;
				hostname = pathname;
				pathname = null;
				path = null;
			} else {
				// e.g. 'github:user/repo' — first segment is host, rest is path
				host = pathname.slice(0, slashIdx);
				hostname = host;
				pathname = pathname.slice(slashIdx);
				path = pathname + (u.search || '');
			}
		}

		return {
			protocol: u.protocol || null,
			slashes: true,
			auth: auth,
			host: host,
			port: u.port || null,
			hostname: hostname,
			hash: u.hash || null,
			search: u.search || null,
			query: u.search ? u.search.slice(1) : null,
			pathname: pathname,
			path: path,
			href: u.href
		};
	} catch (_) {
		// Fall back for non-standard strings (bare paths, git@ URLs, etc.)
		var hashIdx = str.indexOf('#');
		var hash = hashIdx !== -1 ? str.slice(hashIdx) : null;
		var pathPart = hashIdx !== -1 ? str.slice(0, hashIdx) : str;
		return {
			protocol: null,
			slashes: null,
			auth: null,
			host: null,
			port: null,
			hostname: null,
			hash: hash,
			search: null,
			query: null,
			pathname: pathPart || null,
			path: pathPart || null,
			href: str
		};
	}
}

/**
 * Extract the host from a git@ URL using the WHATWG URL API.
 */
function getGitAtHost(str) {
	try {
		return new URL('http://' + str.replace(/git@([^:]+):/, '$1/')).host;
	} catch (_) {
		return null;
	}
}

function parse(str) {
	if (typeof str !== 'string' || !str.length) {
		return null;
	}

	if (str.indexOf('git@gist') !== -1 || str.indexOf('//gist') !== -1) {
		return null;
	}

	// parse the URL
	var obj = parseUrl(str);
	if (typeof obj.path !== 'string' || !obj.path.length || typeof obj.pathname !== 'string' || !obj.pathname.length) {
		return null;
	}

	if (!obj.host && (/^git@/).test(str) === true) {
		// return the correct host for git@ URLs
		obj.host = getGitAtHost(str);
	}

	obj.path = trimSlash(obj.path);
	obj.pathname = trimSlash(obj.pathname);
	obj.filepath = null;

	if (obj.path.indexOf('repos') === 0) {
		obj.path = obj.path.slice(6);
	}

	var seg = obj.path.split('/').filter(Boolean);
	var hasBlob = seg[2] === 'blob';
	if (hasBlob && !isChecksum(seg[3])) {
		obj.branch = seg[3];
		if (seg.length > 4) {
			obj.filepath = seg.slice(4).join('/');
		}
	}

	var blob = str.indexOf('blob');
	if (hasBlob && blob !== -1) {
		obj.blob = str.slice(blob + 5);
	}

	var hasTree = seg[2] === 'tree';
	var tree = str.indexOf('tree');
	if (hasTree && tree !== -1) {
		var idx = tree + 5;
		var branch = str.slice(idx);
		var slash = branch.indexOf('/');
		if (slash !== -1) {
			branch = branch.slice(0, slash);
		}
		obj.branch = branch;
	}

	obj.owner = owner(seg[0]);
	obj.name = name(seg[1]);

	if (seg.length > 1 && obj.owner && obj.name) {
		obj.repo = obj.owner + '/' + obj.name;
	} else {
		var href = obj.href.split(':');
		if (href.length === 2 && obj.href.indexOf('//') === -1) {
			obj.repo = obj.repo || href[href.length - 1];
			var repoSegments = obj.repo.split('/');
			obj.owner = repoSegments[0];
			obj.name = repoSegments[1];

		} else {
			var match = obj.href.match(/\/([^/]*)$/);
			obj.owner = match ? match[1] : null;
			obj.repo = null;
		}

		if (obj.repo && (!obj.owner || !obj.name)) {
			var segs = obj.repo.split('/');
			if (segs.length === 2) {
				obj.owner = segs[0];
				obj.name = segs[1];
			}
		}
	}

	if (!obj.branch) {
		obj.branch = seg[2] || getBranch(obj.path, obj);
		if (seg.length > 3) {
			obj.filepath = seg.slice(3).join('/');
		}
	}

	obj.host = obj.host || 'github.com';
	obj.owner = obj.owner || null;
	obj.name = obj.name || null;
	obj.repository = obj.repo;
	return obj;
}

module.exports = function parseGithubUrl(str) {
	if (!cache[str]) {
		cache[str] = parse(str);
	}
	return cache[str];
};

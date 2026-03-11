'use strict';

var urlModule = require('url');
var URLCtor = typeof URL === 'undefined' ? urlModule.URL || null : URL;
var legacyURLParse = URLCtor ? null : urlModule.parse;

function parseWHATWG(str) {
	try {
		var u = new URLCtor(str);
		var auth = null;
		if (u.username) {
			auth = u.password ? u.username + ':' + u.password : u.username;
		}
		var host = u.host || null;
		var hostname = u.hostname || null;
		var pathname = u.pathname || null;
		var path = u.pathname + (u.search || '') || null;

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
			auth: auth,
			hash: u.hash || null,
			host: host,
			hostname: hostname,
			href: u.href,
			path: path,
			pathname: pathname,
			port: u.port || null,
			protocol: u.protocol || null,
			query: u.search ? u.search.slice(1) : null,
			search: u.search || null,
			slashes: str.indexOf('//') === -1 ? null : true
		};
	} catch (_) {
		// Fall back for non-standard strings (bare paths, git@ URLs, etc.)
		var hashIdx = str.indexOf('#');
		var hash = hashIdx === -1 ? null : str.slice(hashIdx);
		var pathPart = hashIdx === -1 ? str : str.slice(0, hashIdx);
		var queryIdx = pathPart.indexOf('?');
		var search = queryIdx === -1 ? null : pathPart.slice(queryIdx);
		var pathnamePart = queryIdx === -1 ? pathPart : pathPart.slice(0, queryIdx);
		return {
			auth: null,
			hash: hash,
			host: null,
			hostname: null,
			href: str,
			path: pathPart || null,
			pathname: pathnamePart || null,
			port: null,
			protocol: null,
			query: search ? search.slice(1) : null,
			search: search,
			slashes: null
		};
	}
}

module.exports = URLCtor ? parseWHATWG : legacyURLParse;

'use strict';
var test = require('ava');
var appPath = require('./');

test(function (t) {
	t.plan(2);

	appPath('Safari', function (err, path) {
		t.assert(!err, err);
		t.assert(path === '/Applications/Safari.app/');
	});
});

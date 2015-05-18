'use strict';
var test = require('ava');
var appPath = require('./');

test('name', function (t) {
	t.plan(2);

	appPath('Safari', function (err, path) {
		t.assert(!err, err);
		t.assert(path === '/Applications/Safari.app', path);
	});
});

test('bundle id', function (t) {
	t.plan(2);

	appPath('com.apple.Safari', function (err, path) {
		t.assert(!err, err);
		t.assert(path === '/Applications/Safari.app', path);
	});
});

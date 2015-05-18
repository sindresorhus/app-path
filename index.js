'use strict';
var runApplescript = require('run-applescript');

module.exports = function (appName, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('OS X only');
	}

	if (typeof appName !== 'string') {
		throw new Error('Please supply an app name');
	}

	var script = 'tell application "Finder" to POSIX path of (path to application "' + appName + '")';

	runApplescript(script, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};

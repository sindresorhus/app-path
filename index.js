'use strict';
var runApplescript = require('run-applescript');

module.exports = function (app, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('OS X only');
	}

	if (typeof app !== 'string') {
		throw new Error('Please supply an app name or bundle identifier');
	}

	var fn = app.indexOf('.') !== -1 ? 'absolutePathForAppBundleWithIdentifier' : 'fullPathForApplication';

	var script = 'use framework "Foundation"\n(current application\'s NSWorkspace\'s sharedWorkspace()\'s ' + fn + ':"' + app + '") as text';

	runApplescript(script, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};

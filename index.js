'use strict';
var childProcess = require('child_process');

module.exports = function (app, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('OS X only');
	}

	if (typeof app !== 'string') {
		throw new Error('Please supply an app name or bundle identifier');
	}

	childProcess.execFile('./main', [app], {cwd: __dirname}, function (err, res) {
		if (err) {
			if (err.code === 2) {
				err.message = 'Couldn\'t find the app';
			}

			cb(err);
			return;
		}

		cb(null, res.trim());
	});
};

'use strict';
const childProcess = require('child_process');
const execa = require('execa');

function tweakErr(err) {
	if (err.code === 2) {
		err.message = 'Couldn\'t find the app';
	}

	throw err;
}

module.exports = app => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('OS X only'));
	}

	if (typeof app !== 'string') {
		return Promise.reject(new Error('Please supply an app name or bundle identifier'));
	}

	return execa('./main', [app], {cwd: __dirname})
		.then(data => data.stdout)
		.catch(tweakErr);
};

module.exports.sync = app => {
	if (process.platform !== 'darwin') {
		throw new Error('OS X only');
	}

	if (typeof app !== 'string') {
		throw new Error('Please supply an app name or bundle identifier');
	}

	let stdout = '';

	try {
		// TODO: use `execa.sync()` when it's implemented there
		stdout = childProcess.execFileSync('./main', [app], {
			cwd: __dirname,
			encoding: 'utf8'
		}).trim();
	} catch (err) {
		tweakErr(err);
	}

	return stdout;
};

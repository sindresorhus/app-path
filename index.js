'use strict';
const execa = require('execa');

module.exports = app => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('OS X only'));
	}

	if (typeof app !== 'string') {
		return Promise.reject(new Error('Please supply an app name or bundle identifier'));
	}

	return execa('./main', [app], {cwd: __dirname})
		.then(data => data.stdout)
		.catch(err => {
			if (err.code === 2) {
				err.message = 'Couldn\'t find the app';
			}

			throw err;
		});
};

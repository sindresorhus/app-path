'use strict';
const execa = require('execa');

const tweakError = error => {
	if (error.code === 2) {
		error.message = 'Couldn\'t find the app';
	}

	throw error;
};

module.exports = async app => {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	if (typeof app !== 'string') {
		throw new TypeError('Please supply an app name or bundle identifier');
	}

	try {
		return execa.stdout('./main', [app], {cwd: __dirname});
	} catch (error) {
		tweakError(error);
	}

	return execa.stdout('./main', [app], {cwd: __dirname}).catch(tweakError);
};

module.exports.sync = app => {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	if (typeof app !== 'string') {
		throw new TypeError('Please supply an app name or bundle identifier');
	}

	try {
		return execa.sync('./main', [app], {cwd: __dirname}).stdout;
	} catch (error) {
		tweakError(error);
	}
};

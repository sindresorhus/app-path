#!/usr/bin/env node
'use strict';
var meow = require('meow');
var appPath = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ app-path Safari',
		'  /Applications/Safari.app'
	]
});

if (cli.input.length !== 1) {
	cli.showHelp();
	process.exit(1);
}

appPath(cli.input[0], function (err, path) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(path);
});

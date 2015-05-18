# app-path [![Build Status](https://travis-ci.org/sindresorhus/app-path.svg?branch=master)](https://travis-ci.org/sindresorhus/app-path)

> Get the path to an app *(OS X)*


## Install

```
$ npm install --save app-path
```


## Usage

```js
var appPath = require('app-path');

appPath('Safari', function (err, path) {
	console.log(path);
	//=> '/Applications/Safari.app'
});

appPath('com.apple.Safari', function (err, path) {
	console.log(path);
	//=> '/Applications/Safari.app'
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

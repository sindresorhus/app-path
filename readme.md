# app-path [![Build Status](https://travis-ci.org/sindresorhus/app-path.svg?branch=master)](https://travis-ci.org/sindresorhus/app-path)

> Get the path to an app *(macOS)*


## Install

```
$ npm install app-path
```


## Usage

```js
const appPath = require('app-path');

(async () => {
	console.log(await appPath('Safari'));
	//=> '/Applications/Safari.app'

	console.log(await appPath('com.apple.Safari'));
	//=> '/Applications/Safari.app'
})();

console.log(appPath.sync('Safari'));
//=> '/Applications/Safari.app'
```



## Related

- [app-path-cli](https://github.com/sindresorhus/app-path-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

import test from 'ava';
import appPath from './index.js';

test('async - name', async t => {
	t.is(await appPath('Safari'), '/Applications/Safari.app');
});

test('async - bundle id', async t => {
	t.is(await appPath('com.apple.Safari'), '/Applications/Safari.app');
});

test('sync - name', t => {
	t.is(appPath.sync('Safari'), '/Applications/Safari.app');
});

test('sync - bundle id', t => {
	t.is(appPath.sync('com.apple.Safari'), '/Applications/Safari.app');
});

test('throws when app couldn\'t be found', async t => {
	await t.throwsAsync(appPath('fooAppBarBaz'), {message: 'Couldn\'t find the app'});

	t.throws(() => {
		appPath.sync('fooAppBarBaz');
	}, {
		message: 'Couldn\'t find the app'
	});
});

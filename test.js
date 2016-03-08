import test from 'ava';
import m from './';

test.only('name', async t => {
	t.is(await m('Safari'), '/Applications/Safari.app');
});

test('bundle id', async t => {
	t.is(await m('com.apple.Safari'), '/Applications/Safari.app');
});

import test from 'ava';
import m from './';

test('async - name', async t => {
	t.is(await m('Safari'), '/Applications/Safari.app');
});

test('async - bundle id', async t => {
	t.is(await m('com.apple.Safari'), '/Applications/Safari.app');
});

test('sync - name', t => {
	t.is(m.sync('Safari'), '/Applications/Safari.app');
});

test('sync - bundle id', t => {
	t.is(m.sync('com.apple.Safari'), '/Applications/Safari.app');
});

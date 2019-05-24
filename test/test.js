import { isObject, merge } from '../src';

const assert = require('assert');
const expect = require('expect.js');

// example tests

describe('Test utils', () => {
	it('if is a object', () => {
		expect(isObject({})).to.be(true);
	});
		
	it('merge objects', () => {
		const obj1 = { name: 'test' };
		const obj2 = { lastName: 'last' };
		const obj3 = { name: 'test', lastName: 'last' };
		assert.deepEqual(merge(obj1, obj2), obj3);
	});
});

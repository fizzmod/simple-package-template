import { isArray, isObject, merge, arrayFind } from '../src';

const assert = require('assert');
const expect = require('expect.js');

describe('Test utils fizzmod', () => {
	it('if is a object', () => {
		expect(isObject({})).to.be(true);
	});
		
	it('if is not a object', () => {
		expect(isObject([])).to.be(true);
	});
		
	it('if is not a array', () => {
		expect(isArray({})).to.be(false);
	});

	it('if is a array', () => {
		expect(isArray([])).to.be(true);
	});

	it('array find with property name ', () => {
		const test = [
			{ name: 'test0' },
			{ name: 'test1' },
			{ name: 'test2' }
		];

		assert.deepEqual(arrayFind(test, 'test2', 'name'), { name: 'test2' });
	});

	it('array find simple', () => {
		const test = [1, 2, 3];

		assert.deepEqual(arrayFind(test, 3), 3);
	});

	it('merge objects', () => {
		const obj1 = { name: 'test' };
		const obj2 = { lastName: 'last' };
		const obj3 = { name: 'test', lastName: 'last' };
		assert.deepEqual(merge(obj1, obj2), obj3);
	});
});

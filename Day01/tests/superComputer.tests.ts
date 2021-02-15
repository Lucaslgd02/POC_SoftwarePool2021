import { describe, it, expect } from '@jest/globals';
import { superComputer, callback }  from '../src/superComputer';

describe('Test superComputer function', () => {
	it('Simply 1 - 1', () => {
		expect(superComputer(1, "-", 1, callback)).toBe(0);
	});

	it('The answers of the Universe !', () => {
		const result: number = superComputer(21, "+", 21, callback);
		expect(result).toBe(42);
	});
});
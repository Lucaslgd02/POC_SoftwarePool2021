import { describe, it, expect } from '@jest/globals';
import { createCosmonaut, Cosmonaut }  from '../src/createCosmonaut';

describe('Test createCosmonaut function', () => {
	it('Create a cosmonaut', () => {
		let cosm: Cosmonaut = {name: "Thomas", mission: "Apollo", country: "France"};
		expect(createCosmonaut("Thomas", "Apollo", "France")).toStrictEqual(cosm);
	});
});
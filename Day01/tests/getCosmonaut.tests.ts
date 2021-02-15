import { describe, it, expect } from '@jest/globals';
import { getCosmonaut }  from '../src/getCosmonaut';
import { Cosmonaut }  from '../src/createCosmonaut';

describe('Test createCosmonaut function', () => {
	it('Get a cosmonaut', () => {
		let cosm: Cosmonaut = {name: "Thomas", mission: "Apollo", country: "France"};
		expect(getCosmonaut("../src/cosmonaut.json")).toStrictEqual(cosm);
	});
});
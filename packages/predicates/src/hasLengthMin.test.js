import hasLengthMin from './hasLengthMin';

const hasLengthMin3 = hasLengthMin(3);

describe('hasLengthMax', () => {
	it('should be true if above min', () => {
		expect(hasLengthMin3('abcd')).toBeTruthy();
	});
	it('should be true if min', () => {
		expect(hasLengthMin3('abc')).toBeTruthy();
	});
	it('should be false if lower', () => {
		expect(hasLengthMin3('ab')).toBeFalsy();
	});
});

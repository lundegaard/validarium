import hasLengthMax from './hasLengthMax';

const hasLengthMax10 = hasLengthMax(10);

describe('hasLengthMax', () => {
	it('should be true if lower', () => {
		expect(hasLengthMax10('abcd')).toBeTruthy();
	});
	it('should be true if max', () => {
		expect(hasLengthMax10('abcdefghij')).toBeTruthy();
	});
	it('should be false if higher', () => {
		expect(hasLengthMax10('abcdefghijkl')).toBeFalsy();
	});
});

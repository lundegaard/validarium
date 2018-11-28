import hasLengthInInterval from './hasLengthInInterval';

const inSpecificInterval = hasLengthInInterval(5, 10);

describe('hasLengthInInterval', () => {
	it('should be truthy if in interval', () => {
		expect(inSpecificInterval('abcdef')).toBeTruthy();
	});
	it('should be truthy if lower endpoint', () => {
		expect(inSpecificInterval('abcde')).toBeTruthy();
	});
	it('should be truthy if upper endpoint', () => {
		expect(inSpecificInterval('abcdefghij')).toBeTruthy();
	});
	it('should be falsy if in interval', () => {
		expect(inSpecificInterval('ab')).toBeFalsy();
	});
});

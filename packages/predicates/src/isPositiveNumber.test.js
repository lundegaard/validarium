import isPositiveNumber from './isPositiveNumber';

describe('isPositiveNumber', () => {
	it('should be truthy if number', () => {
		expect(isPositiveNumber(123)).toBeTruthy();
	});
	it('should be falsy if zero', () => {
		expect(isPositiveNumber(0)).toBeFalsy();
	});
	it('should be falsy if negative', () => {
		expect(isPositiveNumber(-123)).toBeFalsy();
	});
});

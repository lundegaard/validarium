import isNumber from './isNumber';

describe('isNumber', () => {
	it('should be truthy if number', () => {
		expect(isNumber(123)).toBeTruthy();
	});
	it('should be truthy if string number', () => {
		expect(isNumber('123')).toBeTruthy();
	});
	it('should be truthy if number with fraction', () => {
		expect(isNumber('123.23')).toBeTruthy();
	});
	it('should be falsy if not number', () => {
		expect(isNumber('12d2#')).toBeFalsy();
	});
});

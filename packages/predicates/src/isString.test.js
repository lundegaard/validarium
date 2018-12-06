import isString from './isString';

describe('isString', () => {
	it('should be truthy', () => {
		expect(isString('abc')).toBeTruthy();
	});
	it('should be falsy when not string', () => {
		expect(isString(44)).toBeFalsy();
	});
});

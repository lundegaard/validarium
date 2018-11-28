import isInteger from './isInteger';

describe('isInteger', () => {
	it('should be truthy when integer', () => {
		expect(isInteger(123)).toBeTruthy();
	});
	it('should be truthy when string integer', () => {
		expect(isInteger('123')).toBeTruthy();
	});
	it('should be truthy when not integer', () => {
		expect(isInteger(123.2)).toBeFalsy();
	});
	it('should be falsy when not integer', () => {
		expect(isInteger('abc123')).toBeFalsy();
	});
});

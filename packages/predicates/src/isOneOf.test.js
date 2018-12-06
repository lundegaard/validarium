import isOneOf from './isOneOf';

const isOneOfFruit = isOneOf(['banana', 'pineapple', 'apple']);

describe('isOneOf', () => {
	it('should be truthy if equals one of', () => {
		expect(isOneOfFruit('banana')).toBeTruthy();
	});
	it('should be falsy when different', () => {
		expect(isOneOfFruit('blueberry')).toBeFalsy();
	});
});

import isNotOneOf from './isNotOneOf';

const isNotOneOfFruit = isNotOneOf(['banana', 'pineapple', 'apple']);

describe('isOneOf', () => {
	it('should be truthy if equals one of', () => {
		expect(isNotOneOfFruit('blueberry')).toBeTruthy();
	});
	it('should be falsy when different', () => {
		expect(isNotOneOfFruit('banana')).toBeFalsy();
	});
});

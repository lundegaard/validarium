import startsWith from './startsWith';

const startsWithDog = startsWith('dog');

describe('startsWith', () => {
	it('should be truthy when starts with', () => {
		expect(startsWithDog('dogo')).toBeTruthy();
	});
	it('should be falsy when doesnt start with', () => {
		expect(startsWithDog('cato')).toBeFalsy();
	});
});

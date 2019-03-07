import hasValueInInterval from './hasValueInInterval';

const hasValueInSpecificInterval = hasValueInInterval(10, 30);

describe('hasValueInInterval', () => {
	it('should be truthy when in interval', () => {
		expect(hasValueInSpecificInterval(15)).toBeTruthy();
	});
	it('should be truthy when lower edpoint', () => {
		expect(hasValueInSpecificInterval(10)).toBeTruthy();
	});
	it('should be truthy when upper endpoint', () => {
		expect(hasValueInSpecificInterval(30)).toBeTruthy();
	});
	it('should be falsy when out of interval', () => {
		expect(hasValueInSpecificInterval(35)).toBeFalsy();
	});
});

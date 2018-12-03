import { always } from 'ramda';
import hasAgeInInterval from './hasAgeInInterval';

const hasAgeInSpecificInterval = hasAgeInInterval(18, 40);

global.Date.now = jest.fn(always(new Date('2018-12-03')));

describe('hasAgeInInterval', () => {
	it('should be true when in interval', () => {
		expect(hasAgeInSpecificInterval('2000-07-01')).toBeTruthy();
	});
	it('should be true when interval endpoint', () => {
		expect(hasAgeInSpecificInterval('1993-04-03')).toBeTruthy();
	});
	it('should be falsy when out of interval', () => {
		expect(hasAgeInSpecificInterval('1970-07-01')).toBeFalsy();
	});
});

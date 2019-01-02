import matches from './matches';

const matchReq = matches('/([a-z]a)/g');

describe('matches', () => {
	it('should be true if matches', () => {
		expect(matches('banana')).toBeTruthy();
	});
	it('should be true if matches', () => {
		expect(matchReq('fak')).toBeFalsy();
	});
});

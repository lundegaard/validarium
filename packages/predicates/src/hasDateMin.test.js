import hasDateMin from './hasDateMin';

const hasDateMinBySpecific = hasDateMin('2010-07-01');

describe('hasDateMin', () => {
	it('should be true when before', () => {
		expect(hasDateMinBySpecific('2011-07-01')).toBeTruthy();
	});
	it('should be true when exact', () => {
		expect(hasDateMinBySpecific('2010-07-01')).toBeTruthy();
	});
	it('should be falsy when after', () => {
		expect(hasDateMinBySpecific('2005-07-01')).toBeFalsy();
	});
});

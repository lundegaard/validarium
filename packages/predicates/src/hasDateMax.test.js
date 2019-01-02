import hasDateMax from './hasDateMax';

const hasDateMaxBySpecific = hasDateMax('2010-07-01');

describe('hasDateMax', () => {
	it('should be true when before', () => {
		expect(hasDateMaxBySpecific('2000-07-01')).toBeTruthy();
	});
	it('should be true when exact', () => {
		expect(hasDateMaxBySpecific('2010-07-01')).toBeTruthy();
	});
	it('should be falsy when after', () => {
		expect(hasDateMaxBySpecific('2032-07-01')).toBeFalsy();
	});
});

import hasNoSpecialSymbols from './hasNoSpecialSymbols';

describe('hasNoSpecialSymbols', () => {
	it('should be truthy if no special symbols', () => {
		expect(hasNoSpecialSymbols('No speacial smybols 12')).toBeTruthy();
	});
	it('should be falsy if contains special symbols', () => {
		expect(hasNoSpecialSymbols('Special one %')).toBeFalsy();
	});
});

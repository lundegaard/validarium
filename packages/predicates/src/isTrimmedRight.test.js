import isTrimmedRight from './isTrimmedRight';

describe('isTrimmedRight', () => {
	it('should pass for characters that do not end with white spaces', () => {
		expect(isTrimmedRight('')).toBeTruthy();
		expect(isTrimmedRight(' a')).toBeTruthy();
		expect(isTrimmedRight(' aaa')).toBeTruthy();
		expect(isTrimmedRight('aa a')).toBeTruthy();
	});
	it('should not pass for characters that do end with white spaces', () => {
		expect(isTrimmedRight(' ')).toBeFalsy();
		expect(isTrimmedRight('s ')).toBeFalsy();
		expect(isTrimmedRight(' s ')).toBeFalsy();
	});
});

import isTrimmed from './isTrimmed';

describe('isTrimmed', () => {
	it('should pass for characters that are trimmed of white spaces', () => {
		expect(isTrimmed('')).toBeTruthy();
		expect(isTrimmed('a')).toBeTruthy();
		expect(isTrimmed('aaa')).toBeTruthy();
		expect(isTrimmed('aa a')).toBeTruthy();
	});
	it('should not pass for characters that are not trimmed of white spaces', () => {
		expect(isTrimmed(' ')).toBeFalsy();
		expect(isTrimmed(' s')).toBeFalsy();
		expect(isTrimmed(' s ')).toBeFalsy();
		expect(isTrimmed('s ')).toBeFalsy();
	});
});

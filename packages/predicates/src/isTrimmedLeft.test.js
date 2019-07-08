import isTrimmedLeft from './isTrimmedLeft';

describe('isTrimmedLeft', () => {
	it('should pass for characters that do not start with white spaces', () => {
		expect(isTrimmedLeft('')).toBeTruthy();
		expect(isTrimmedLeft('a ')).toBeTruthy();
		expect(isTrimmedLeft('aaa ')).toBeTruthy();
		expect(isTrimmedLeft('aa a  ')).toBeTruthy();
	});
	it('should not pass for characters that do start with white spaces', () => {
		expect(isTrimmedLeft(' ')).toBeFalsy();
		expect(isTrimmedLeft(' s')).toBeFalsy();
		expect(isTrimmedLeft(' s ')).toBeFalsy();
	});
});

import hasOnlyDigits from './hasOnlyDigits';

describe('hasOnlyDigits', () => {
	it('should be true when only digits', () => {
		expect(hasOnlyDigits('123456')).toBeTruthy();
	});
	it('should be true when not only digits', () => {
		expect(hasOnlyDigits('123a456')).toBeFalsy();
	});
});

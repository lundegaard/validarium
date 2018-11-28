import isPhoneNumber from './isPhoneNumber';

describe('isPhoneNumber', () => {
	it('should be truthy if number', () => {
		expect(isPhoneNumber(776756565)).toBeTruthy();
	});
	it('should be falsy if not phone number', () => {
		expect(isPhoneNumber('122')).toBeFalsy();
	});
});

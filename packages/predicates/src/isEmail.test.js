import isEmail from './isEmail';

describe('isEmail', () => {
	it('should be truthy when valid email', () => {
		expect(isEmail('email.mail@email.ma')).toBeTruthy();
	});
	it('should be truthy when empty string', () => {
		expect(isEmail('')).toBeTruthy();
	});
	it('should be truthy when nil', () => {
		expect(isEmail(null)).toBeTruthy();
	});
	it('should be falsy when invalid email', () => {
		expect(isEmail('email.mail@email')).toBeFalsy();
	});
});

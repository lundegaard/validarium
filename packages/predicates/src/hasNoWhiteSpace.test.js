import hasNoWhiteSpace from './hasNoWhiteSpace';

describe('hasNoWhiteSpace', () => {
	it('should be truthy if no white space', () => {
		expect(hasNoWhiteSpace('validarium')).toBeTruthy();
	});
	it('should be falsy if contains special symbols', () => {
		expect(hasNoWhiteSpace('validarium	')).toBeFalsy();
		expect(hasNoWhiteSpace('validarium ')).toBeFalsy();
		expect(hasNoWhiteSpace('vali darium ')).toBeFalsy();
	});
});

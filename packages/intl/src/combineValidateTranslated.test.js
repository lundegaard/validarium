import { validate } from '@validarium/core';
import combineValidateTranslated from './combineValidateTranslated';

const required = x => (!x ? { message: { id: 'required', defaultMessage: 'Is required.' } } : null);

const intlMock = {
	formatMessage: m => m.id,
};

describe('validateTranslated', () => {
	it('should validate and translate messages', () => {
		expect(
			combineValidateTranslated(
				intlMock,
				validate({
					user: [required],
				}),
				validate({
					email: [required],
				})
			)({})
		).toEqual({ user: 'required', email: 'required' });
	});
});

import validateTranslated from './validateTranslated';

const required = x => (!x ? { message: { id: 'required', defaultMessage: 'Is required.' } } : null);

const intlMock = {
	formatMessage: m => m.id,
};

describe('validateTranslated', () => {
	it('should validate and translate messages', () => {
		expect(
			validateTranslated(
				intlMock,
				{
					user: [required],
				},
				{}
			)
		).toEqual({ user: 'required' });
	});
});

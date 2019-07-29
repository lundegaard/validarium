import validate from './validate';

const required = x => (!x ? 'Is required.' : null);
const requiredWithFieldName = (x, key) => (!x ? `${key} is required.` : null);
const greaterThan0 = x => (x < 0 ? 'Must be greater than 0.' : null);

describe('validate', () => {
	describe('for validation descriptor that is list', () => {
		const simpleDescriptor = [required];
		const descriptor = [required, greaterThan0];

		it('returns result of validation functions', () => {
			expect(validate(simpleDescriptor)('')).toEqual('Is required.');
		});

		// For clarification not nil means: `x !== null && typeof x !== 'undefined'`
		// which is the same as `x != null`
		describe('returns first not nil result from descriptor', () => {
			it('for -1 returns `"Must be greater than 0."`', () => {
				expect(validate(descriptor)(-1)).toEqual('Must be greater than 0.');
			});
		});

		it('for valid input returns `undefined`', () => {
			expect(validate(descriptor)(1)).toBe(undefined);
		});
	});

	describe('for validation descriptor that is object', () => {
		const simpleDescriptor = {
			id: [requiredWithFieldName],
			name: [requiredWithFieldName],
			surname: [requiredWithFieldName],
		};

		it('returns result of validation functions for each property', () => {
			expect(
				validate(simpleDescriptor)({
					id: '',
					name: '',
					surname: '',
				})
			).toEqual({
				id: 'id is required.',
				name: 'name is required.',
				surname: 'surname is required.',
			});
		});

		it('if validated object is valid returns null', () => {
			expect(
				validate(simpleDescriptor)({
					id: 1,
					name: 'John',
					surname: 'Doe',
				})
			).toEqual(null);
		});

		it('works with attributes that are described in descriptor but not in validated object', () => {
			expect(validate(simpleDescriptor)({})).toEqual({
				id: 'id is required.',
				name: 'name is required.',
				surname: 'surname is required.',
			});
		});
	});
});

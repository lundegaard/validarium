import { times, forEach, o, fromPairs } from 'ramda';
import combineValidate from './combineValidate';
import validate from './validate';

const required = x => (!x ? 'Is required.' : null);
const greaterThan0 = x => (x < 0 ? 'Must be greater than 0.' : null);

describe('combineValidate', () => {
	const ageSchemeRequired = validate({
		age: [required],
	});
	const ageSchemeGreater = validate({
		age: [greaterThan0],
	});

	it('should validate single validate', () => {
		expect(combineValidate(ageSchemeRequired)({})).toEqual({ age: 'Is required.' });
		expect(combineValidate(ageSchemeRequired)({ age: 'asd' })).toEqual({});
	});
	it('should validate multiple validations', () => {
		expect(combineValidate(ageSchemeRequired, ageSchemeGreater)({})).toEqual({
			age: 'Is required.',
		});
		expect(combineValidate(ageSchemeRequired, ageSchemeGreater)({ age: -1 })).toEqual({
			age: 'Must be greater than 0.',
		});
		expect(combineValidate(ageSchemeRequired, ageSchemeGreater)({ age: 1 })).toEqual({});
	});

	describe('works with variable number of validation functions', () => {
		const itCallsWithValuesHelper = n =>
			it(`All of ${n} validation functions are called with values`, () => {
				const values = {};
				const validations = times(() => jest.fn(), n);

				combineValidate(...validations)(values);

				forEach(validation => {
					expect(validation.mock.calls[0][0]).toBe(values);
				})(validations);
			});

		const itCallsMergesResultHelper = n =>
			it(`Results from all of ${n} validation functions are merged from left`, () => {
				const values = {};
				const validations = times(i => {
					const mock = jest.fn();

					mock.mockReturnValueOnce({ toBeReplacedFromLeft: i, [`notToBeReplaced-${i}`]: true });

					return mock;
				}, n);

				const result = combineValidate(...validations)(values);

				const notToBeReplacedProps = o(fromPairs, times(i => [`notToBeReplaced-${i}`, true]))(n);

				return n > 0
					? expect(result).toEqual({
							toBeReplacedFromLeft: 0,
							...notToBeReplacedProps,
					  })
					: expect(result).toEqual({});
			});

		itCallsWithValuesHelper(0);
		itCallsWithValuesHelper(1);
		itCallsWithValuesHelper(3);
		itCallsWithValuesHelper(10);

		itCallsMergesResultHelper(0);
		itCallsMergesResultHelper(1);
		itCallsMergesResultHelper(3);
		itCallsMergesResultHelper(10);
	});
});

import { times, forEach, o, fromPairs, path } from 'ramda';
import createMainValidate from './createMainValidate';

describe('createMainValidate', () => {
	const mockProps = { intl: { formatMessage: () => {} } };
	const createMockMessage = (id, defaultMessage, args) => ({
		message: {
			id,
			defaultMessage,
		},
		args,
	});

	it('throws error if there is no intl function in props', () => {
		const noIntl = () => createMainValidate()({})(null);
		const noIntlFunction = () => createMainValidate()({ intl: { formatMessage: null } })(null);
		const intlFunction = () => createMainValidate()(mockProps)(null);

		expect(noIntl).toThrow();
		expect(noIntlFunction).toThrow();
		expect(intlFunction).not.toThrow();
	});

	describe('works with variable number of validation functions', () => {
		const itCallsWithValuesHelper = n =>
			it(`All of ${n} validation functions are called with values`, () => {
				const values = {};
				const validations = times(() => jest.fn(), n);

				createMainValidate(...validations)(mockProps)(values);

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

				const result = createMainValidate(...validations)(mockProps)(values);

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

	describe('translates result of validations', () => {
		it('works for nested properties', () => {
			const intlMock = {
				formatMessage: m => path(['id'])(m),
			};
			const validation = jest.fn();

			validation.mockReturnValueOnce({
				foo: createMockMessage('id', 'message', [1, 2]),
				bar: {
					baz: createMockMessage('id', 'message', [1, 2]),
				},
			});

			const result = createMainValidate(validation)({ intl: intlMock })({});

			expect(validation.mock.calls.length).toBe(1);
			expect(result).toEqual({ foo: 'id', bar: { baz: 'id' } });
		});
	});
});

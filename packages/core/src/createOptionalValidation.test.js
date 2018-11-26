import createOptionalValidation from './createOptionalValidation';

describe('createOptionalValidation', () => {
	const mockMessage = { id: 1, defaultMessage: '' };
	const mockArg = {};

	it('creates validation from predicate function', () => {
		const mockFnTrue = jest.fn(() => true);
		const validation = createOptionalValidation(mockFnTrue, mockMessage);

		expect(validation(mockArg)).toBe(null);

		expect(mockFnTrue.mock.calls.length).toBe(1);
		expect(mockFnTrue.mock.calls[0][0]).toBe(mockArg);
	});

	it('passes all arguments', () => {
		const mockFnTrue = jest.fn(() => true);
		const validation = createOptionalValidation(mockFnTrue, mockMessage);

		const args = [1, 2, 3];

		validation(...args);

		expect(mockFnTrue.mock.calls[0].length).toBe(args.length);
		expect(mockFnTrue.mock.calls[0]).toEqual(args);
	});

	it('adds message arguments', () => {
		const mockFnFalse = jest.fn(() => false);
		const mockValues = { min: 1, max: 2 };

		const validation = createOptionalValidation(mockFnFalse, mockMessage, mockValues);

		expect(validation('any')).toEqual({ message: mockMessage, messageValues: mockValues });
	});
});

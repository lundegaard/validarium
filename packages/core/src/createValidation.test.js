import createValidation from './createValidation';

describe('createValidation', () => {
	const mockMessage = { id: 1, defaultMessage: '' };
	const mockArg = { foo: 'bar' };

	it('creates validation from predicate function', () => {
		const mockFnTrue = jest.fn(() => true);
		const validation = createValidation(mockFnTrue, mockMessage);

		expect(validation(mockArg)).toBe(null);

		expect(mockFnTrue.mock.calls.length).toBe(1);
		expect(mockFnTrue.mock.calls[0][0]).toBe(mockArg);
	});

	it('passes all arguments', () => {
		const mockFnTrue = jest.fn(() => true);
		const validation = createValidation(mockFnTrue, mockMessage);

		const args = [1, 2, 3];

		validation(...args);

		expect(mockFnTrue.mock.calls[0].length).toBe(args.length);
		expect(mockFnTrue.mock.calls[0]).toEqual(args);
	});

	it('if first argument is nil, it always fail', () => {
		const mockFnTrue = jest.fn(() => true);
		const mockValues = { min: 1, max: 2 };

		const validation = createValidation(mockFnTrue, mockMessage, mockValues);

		expect(validation(null)).toBeTruthy();
	});

	it('adds message arguments', () => {
		const mockFnFalse = jest.fn(() => false);
		const mockValues = { min: 1, max: 2 };

		const validation = createValidation(mockFnFalse, mockMessage, mockValues);

		expect(validation('any')).toEqual({ message: mockMessage, messageValues: mockValues });
	});
});

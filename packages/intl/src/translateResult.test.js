import { path } from 'ramda';
import translateResult from './translateResult';

const createMockMessage = (id, defaultMessage, args) => ({
	message: {
		id,
		defaultMessage,
	},
	args,
});

const intlMock = {
	formatMessage: m => path(['id'])(m),
};

describe('translateResult', () => {
	it('throws error if there is no intl function in props', () => {
		const noIntl = () => translateResult({})(null);
		const noIntlFunction = () => translateResult({ formatMessage: null })(null);
		const intlFunction = () => translateResult(intlMock)(null);
		expect(noIntl).toThrow();
		expect(noIntlFunction).toThrow();
		expect(intlFunction).not.toThrow();
	});
	it('should translate simple object', () => {
		const result = translateResult(intlMock)({
			foo: createMockMessage('id', 'message', [1, 2]),
		});
		expect(result).toEqual({ foo: 'id' });
	});
	it('should translate nested object', () => {
		const result = translateResult(intlMock)({
			bar: {
				baz: createMockMessage('id', 'message', [1, 2]),
			},
		});
		expect(result).toEqual({ bar: { baz: 'id' } });
	});
});

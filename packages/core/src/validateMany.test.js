import validateMany from './validateMany';

const required = x => (!x ? 'Is required.' : null);
const greaterThanZero = x => (x < 0 ? 'Must be greater than 0.' : null);

describe('validateMany', () => {
	it('validate by descriptor for first item in array', () => {
		expect(
			validateMany(
				{
					id: [required, greaterThanZero],
					name: [required],
					surname: [required],
				},
				[
					{
						id: -1,
						surname: 'Doe',
					},
					{
						id: 13,
						name: 'Bob',
					},
				]
			)
		).toEqual([
			{
				id: 'Must be greater than 0.',
				name: 'Is required.',
			},
			{
				surname: 'Is required.',
			},
		]);
	});
});

import { map, useWith } from 'ramda';
import { defaultToEmptyArray } from 'ramda-extension';

import validate from './validate';

/**
 * Applies validations in `descriptor` for each item in `values`.
 * Params are curried.
 *
 * @param {object} descriptor Object that contains validations for each item in `values`
 * @param {array} values Values for validations
 * @sig Object -> [Object] -> [Object]
 * @alias module:core.validateMany
 *
 * @example
 *
 *			validateMany({
 *				id: [(x) => !x && 'Is required.', (x) => x < 0 && 'Must be greater than 0.'],
 *				name: [(x) => !x && 'Is required.'],
 *				surname: [(x) => !x && 'Is required.'],
 *			}, [
 *				{
 *					id: -1,
 *					surname: 'Doe',
 *				},
 *				{
 *					id: 13,
 *					name: 'Bob',
 *				},
 *			])
 *
 *		 	// [
 *			// 	{
 *			// 		id: 'Must be greater than 0.',
 *			// 		name: 'Is required.',
 *			// 		surname: false,
 *			// 	}, {
 *			// 		id: false,
 *			// 		name: false,
 *			// 		surname: 'Is required.',
 *			// 	},
 *			// ]
 *
 */
export default useWith(map, [validate, defaultToEmptyArray]);

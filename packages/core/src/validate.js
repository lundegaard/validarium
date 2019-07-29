import {
	anyPass,
	compose,
	evolve,
	ifElse,
	isEmpty,
	keys,
	map,
	merge,
	pick,
	pickBy,
	allPass,
	when,
	values,
	o,
	mapObjIndexed,
} from 'ramda';
import { alwaysNull, isArray, notNil, notEmpty, dispatch, isNilOrEmpty } from 'ramda-extension';

const dispatchValidPredicates = (predicates, key) => value =>
	isNilOrEmpty(predicates) ? null : dispatch(predicates)(value, key);

const validObject = anyPass([isEmpty, o(x => !x, values)]);

// TODO: refactor
const validateObjectDescriptor = descriptor => {
	const evolution = mapObjIndexed(dispatchValidPredicates)(descriptor);
	const keysToValidate = keys(descriptor);
	const dull = map(alwaysNull)(descriptor);

	return compose(
		when(validObject, alwaysNull),
		pickBy(allPass([notNil, notEmpty])),
		evolve(evolution),
		pick(keysToValidate),
		merge(dull)
	);
};

const validateListDescriptor = listDescriptor => dispatchValidPredicates(listDescriptor);

/**
 * Applies validations in `descriptor` for `value`.
 * Params are curried.
 *
 * @param {object} descriptor Object that contains validations for each item in `values`
 * @param {any} value Value for validation
 *
 * @sig Object -> a -> b
 *
 * @example
 *
 *			validate({
 *				id: [(x) => !x && 'Is required.', (x) => x < 0 && 'Must be greater than 0.'],
 *				name: [(x) => !x && 'Is required.'],
 *				surname: [(x) => !x && 'Is required.'],
 *			}, {
 *					id: -1,
 *					surname: 'Doe',
 *				}
 *			])
 *
 *			// 	{
 *			// 		id: 'Must be greater than 0.',
 *			// 		name: 'Is required.',
 *			// 		surname: false,
 *			// 	}
 *
 */
export default ifElse(isArray, validateListDescriptor, validateObjectDescriptor);

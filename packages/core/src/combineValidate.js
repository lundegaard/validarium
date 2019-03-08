import { T, compose, cond, juxt, mergeDeepLeft, flip, nthArg } from 'ramda';
import { rejectNil, isObject, mergeDeepAllWith, headArg } from 'ramda-extension';
import { isNilOrAllIsNil } from './utils';

/**
 * For merging validation results.
 * We don't want to null results replacing those already filled.
 */
const mergeResults = mergeDeepAllWith(
	cond([
		[isNilOrAllIsNil, nthArg(1)],
		[flip(isNilOrAllIsNil), headArg],
		[(a, b) => isObject(a) && isObject(b), mergeDeepLeft],
		[T, headArg],
	])
);

/**
 * Combine multiple validate schemes into one. If multiple schemes contains same validation, then the error validation * always wins.
 *
 * @param  {...Function} fns Validation functions.
 * @param {any} values
 * @return {Object} Merged result result.
 *
 * @alias module:core.combineValidate
 */
const combineValidate = (...fns) =>
	compose(
		mergeResults,
		rejectNil,
		juxt(fns)
	);

export default combineValidate;

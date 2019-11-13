import { T, compose, cond, juxt, flip, nthArg } from 'ramda';
import { rejectNil, mergeDeepAllWith, headArg } from 'ramda-extension';
import { isNilOrAllIsNil } from './utils';

/**
 * For merging validation results.
 * We don't want to null results replacing those already filled.
 */
const mergeResults = mergeDeepAllWith(
	cond([[isNilOrAllIsNil, nthArg(1)], [flip(isNilOrAllIsNil), headArg], [T, headArg]])
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

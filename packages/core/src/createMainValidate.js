import invariant from 'invariant';
import {
	T,
	allPass,
	compose,
	cond,
	identity,
	juxt,
	map,
	o,
	path,
	pickBy,
	mergeDeepLeft,
	flip,
	nthArg,
} from 'ramda';
import {
	notNil,
	rejectNil,
	isObject,
	isFunction,
	mergeDeepAllWith,
	headArg,
} from 'ramda-extension';
import { unlessIsNil, isNilOrAllIsNil } from './utils';

const isIntlMessage = x => x && notNil(x.id) && notNil(x.defaultMessage);

const notNilObject = allPass([notNil, isObject]);
const isIntlMessageWithArgs = allPass([isObject, ({ message }) => !!isIntlMessage(message)]);
const pickByNotNil = pickBy(notNil);

/**
 * Recursevily translates messages in validation result.
 */
const translate = formatMessage =>
	cond([
		[isIntlMessageWithArgs, ({ message, messageValues }) => formatMessage(message, messageValues)],
		[notNilObject, map(unlessIsNil(x => translate(formatMessage)(x)))],
		[T, identity],
	]);

const existFormatMessage = o(isFunction, path(['intl', 'formatMessage']));

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
 * Applies `fns` with `values` and `props`.
 * Results of `fns` are translated with `react-intl`;
 * We assume that `props` contains `intl` object from `react-intl` (usually obtained by `injectIntl`).
 *
 * @param  {...Function} fns) Validation functions.
 * @param {Object} props
 * @param {any} values
 * @return {Object}         Translated result.
 */
export const createMainValidate = (...fns) => props => values => {
	invariant(existFormatMessage(props), 'Function `intl` is required in `createMainValidate`.');

	// prettier-ignore
	return compose(
		pickByNotNil,
		unlessIsNil(translate(props.intl.formatMessage)),
		mergeResults,
		rejectNil,
		juxt(fns)
	)(values, props);
};

export default createMainValidate;

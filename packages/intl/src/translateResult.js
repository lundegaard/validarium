import invariant from 'invariant';
import { T, allPass, cond, identity, map, o, prop, pickBy } from 'ramda';
import { notNil, isObject, isFunction } from 'ramda-extension';
import { unlessIsNil } from './utils';

const isIntlMessage = x => x && notNil(x.id) && notNil(x.defaultMessage);

const notNilObject = allPass([notNil, isObject]);
const isIntlMessageWithArgs = allPass([isObject, ({ message }) => !!isIntlMessage(message)]);
const pickByNotNil = pickBy(notNil);

/**
 * Recursively translates messages in validation result.
 */
const translate = formatMessage =>
	cond([
		[isIntlMessageWithArgs, ({ message, messageValues }) => formatMessage(message, messageValues)],
		[notNilObject, map(unlessIsNil(x => translate(formatMessage)(x)))],
		[T, identity],
	]);

const existFormatMessage = o(isFunction, prop('formatMessage'));

/**
 * Translate result of validations with `react-intl`.
 * We assume that `intl` object is from `react-intl` (usually obtained by `injectIntl`).
 *
 * @param {Object} intl
 * @param {Object} result to translate
 * @return {Object} Translated result.
 *
 * @alias module:intl.translateResult
 */
export function translateResult(intl) {
	return result => {
		invariant(existFormatMessage(intl), 'Function `intl` is required');
		return o(pickByNotNil, translate(intl.formatMessage))(result);
	};
}

export default translateResult;

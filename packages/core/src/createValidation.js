import { always, cond, T } from 'ramda';
import { alwaysNull, isNilOrEmpty } from 'ramda-extension';

/**
 * Creates validation function with predicate and message.
 * Results of validation is ready for translation by react-intl.
 * Result is valid if nil or empty is passed. Use required validation if you want to ensure that field is required.
 *
 * @param {Function} fn validation predicate.
 * @param {String} react intl message (eg. { id: 1, defaultMessage: '' })
 * @param {Object} params for intl message (eg. { min: 1, max: 2 })
 * @return {Object|null} Message object when fails { message, messageValues } or null if pass
 * @example
    > const hasLength = length => createValidation(hasLength(length), m.hasLength, { length })
	> hasLength(6)('abcdef')
	  null
 *
 * @alias module:core.createValidation
 */
export default (predicate, message, messageValues) =>
	cond([
		[isNilOrEmpty, alwaysNull], // null-safe before predicate
		[predicate, alwaysNull],
		[T, always({ message, messageValues })],
	]);

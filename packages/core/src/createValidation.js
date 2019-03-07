import { ifElse, allPass, always } from 'ramda';
import { alwaysNull, isNotNil, isNotEmpty } from 'ramda-extension';

/**
 * Creates mandatory validation function with predicate and message
 * Results of validation is ready for translation by react-intl.
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
	ifElse(
		allPass([isNotNil, isNotEmpty, predicate]),
		alwaysNull,
		always({ message, messageValues })
	);

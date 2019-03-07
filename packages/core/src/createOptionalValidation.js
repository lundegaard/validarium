import { always, ifElse } from 'ramda';
import { alwaysNull } from 'ramda-extension';

/**
 * Creates optional validation function with predicate and message
 * Results of validation is ready for translation by react-intl.
 *
 * @param {Function} fn validation predicate.
 * @param {String} react intl message (eg. { id: 1, defaultMessage: '' })
 * @param {Object} params for intl message (eg. { min: 1, max: 2 })
 * @return {Object|null} Message object when fails { message, messageValues } or null if pass
 *
 * @alias module:core.createOptionalValidation
 */
export default (predicate, message, messageValues) =>
	ifElse(predicate, alwaysNull, always({ message, messageValues }));

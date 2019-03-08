import createValidation from '@validarium/core/src/createValidation';
import hasLengthInInterval from '@validarium/predicates/src/hasLengthInInterval';
import m from './messages';

/**
Checks if the value has length in interval
@param {number} - lower interval endpoint
@param {number} - upper interval endpoint
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasLengthInInterval(2, 6)('abcd')
null

> hasLengthInInterval(2, 6)('abcdef')
null

> hasLengthInInterval(2, 6)('a')
{message Object}

@alias module:validations.hasLengthInInterval
*/
export default (min, max) =>
	createValidation(hasLengthInInterval(min, max), m.hasLengthInInterval, { max, min });

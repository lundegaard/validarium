import createValidation from '@validarium/core/src/createValidation';
import hasValueInInterval from '@validarium/predicates/src/hasValueInInterval';
import m from './messages';

/**
Checks if the value has only digits
@param {number} - lower interval endpoint
@param {number} - upper interval endpoint
@returns {Object} {message Object} when predicate fails or null when pass
@category number
@example
> hasValueInInterval(1, 3)(2)
null

> hasValueInInterval(1, 3)(3)
null

> hasValueInInterval(1, 3)(5)
{message Object}

@alias module:validations.hasValueInInterval
*/
export default (min, max) =>
	createValidation(hasValueInInterval(min, max), m.hasValueInInterval, { max, min });

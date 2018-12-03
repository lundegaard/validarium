import createValidation from '@validarium/core/src/createValidation';
import hasValueInInterval from '@validarium/predicates/src/hasValueInInterval';
import m from './messages';

/**
Checks if the age is in specified interval
@param {number} - minimal age
@param {number} - maximal age
@returns {Object} {message Object} when predicate fails or null when pass
@category number
@example
> hasAgeInInterval(1, 3)(2)
null

> hasAgeInInterval(1, 3)(3)
null

> hasAgeInInterval(1, 3)(5)
{message Object}

@alias module:intlValidations.hasAgeInInterval
*/
export default (minAge, maxAge) =>
	createValidation(hasValueInInterval(minAge, maxAge), m.hasAgeInInterval, { minAge, maxAge });

import createValidation from '@validarium/core/src/createValidation';
import isPositiveNumber from '@validarium/predicates/src/isPositiveNumber';
import m from './messages';

/**
Checks if the value is a positive number
@returns {Object} {message Object} when predicate fails or null when pass

@category number
@example
> isPositiveNumber(5)
null

> isPhoneNumber(-5)
{message Object}

> isPositiveNumber(0)
{message Object}

@alias module:intlValidations.isPositiveNumber
*/
export default createValidation(isPositiveNumber, m.isPositiveNumber);

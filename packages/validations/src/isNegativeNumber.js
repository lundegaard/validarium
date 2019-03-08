import createValidation from '@validarium/core/src/createValidation';
import isNegativeNumber from '@validarium/predicates/src/isNegativeNumber';
import m from './messages';

/**
Checks if the value is a negative number
@returns {Object} {message Object} when predicate fails or null when pass

@category number
@example
> isNegativeNumber(-5)
null

> isNegativeNumber(5)
{message Object}

> isNegativeNumber(0)
{message Object}

@alias module:validations.isNegativeNumber
*/
export default createValidation(isNegativeNumber, m.isNegativeNumber);

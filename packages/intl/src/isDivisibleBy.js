import createValidation from '@validarium/core/src/createValidation';
import isDivisibleBy from '@validarium/predicates/src/isDivisibleBy';
import m from './messages';

/**
Checks is value is divisible by desired divisor
@param {number} - divisor
@returns {Object} {message Object} when predicate fails or null when pass

@category number
@example
> isDivisibleBy(5)(10)
null

> isDivisibleBy(6)(10)
{message Object}

@alias module:intlValidations.isDivisibleBy
*/
export default divisor => createValidation(isDivisibleBy(divisor), m.isDivisibleBy, { divisor });

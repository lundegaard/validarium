import createValidation from '@validarium/core/src/createValidation';
import hasValueMin from '@validarium/predicates/src/hasValueMin';
import m from './messages';

/**
Checks if the value is higher or equal to min
@param {number} - minimum value
@returns {Object} {message Object} when predicate fails or null when pass
@category number
@example
> hasValueMin(2)(3)
null

> hasValueMin(2)(2)
null

> hasValueMin(2)(1)
{message Object}

@alias module:intlValidations.hasValueMin
*/
export default min => createValidation(hasValueMin(min), m.hasValueMin, { min });

import createValidation from '@validarium/core/src/createValidation';
import hasValueMax from '@validarium/predicates/src/hasValueMax';
import m from './messages';

/**
Checks if the value is lower or equal to max
@param {number} - maximum value
@returns {Object} {message Object} when predicate fails or null when pass
@category number
@example
> hasValueMax(2)(1)
null

> hasValueMax(2)(2)
null

> hasValueMax(2)(3)
{message Object}

@alias module:validations.hasValueMax
*/
export default max => createValidation(hasValueMax(max), m.hasValueMax, { max });

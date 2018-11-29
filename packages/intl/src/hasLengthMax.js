import createValidation from '@validarium/core/src/createValidation';
import hasLengthMax from '@validarium/predicates/src/hasLengthMax';
import m from './messages';

/**
Checks if the values length is lower or equal to max
@param {number} - maximum value
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasLengthMax(2)('a')
null

> hasLengthMax(2)('ab')
null

> hasLengthMax(2)('abc')
{message Object}

@alias module:intlValidations.hasLengthMax
*/
export default max => createValidation(hasLengthMax(max), m.hasLengthMax, { max });

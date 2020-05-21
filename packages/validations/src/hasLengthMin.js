import createValidation from '@validarium/core/src/createValidation';
import hasLengthMin from '@validarium/predicates/src/hasLengthMin';
import m from './messages';

/**
Checks if the values length is higher or equal to min
@param {number} - minimum value
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasLengthMin(2)('abc')
null

> hasLengthMin(2)('ab')
null

> hasLengthMin(2)('a')
{message Object}

@alias module:validations.hasLengthMin
*/
export default min => createValidation(hasLengthMin(min), m.hasLengthMin, { min });

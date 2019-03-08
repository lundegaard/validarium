import createValidation from '@validarium/core/src/createValidation';
import hasLength from '@validarium/predicates/src/hasLength';
import m from './messages';

/**
Checks if the value has exact length
@param {number} - desired length for value
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasLength(6)('abcdef')
null

> hasLength(6)('abc')
{message Object}

@alias module:validations.hasLength
*/
export default length => createValidation(hasLength(length), m.hasLength, { length });

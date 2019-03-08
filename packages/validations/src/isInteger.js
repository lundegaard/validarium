import createValidation from '@validarium/core/src/createValidation';
import isInteger from '@validarium/predicates/src/isInteger';
import m from './messages';

/**
Checks if the value is an integer
@returns {Object} {message Object} when predicate fails or null when pass

@category number
@example
> isInteger(2)
null

> isInteger(2.1)
{message Object}

@alias module:validations.isInteger
*/
export default createValidation(isInteger, m.isInteger);

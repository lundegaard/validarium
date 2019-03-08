import createValidation from '@validarium/core/src/createValidation';
import isNumber from '@validarium/predicates/src/isNumber';
import m from './messages';

/**
Checks if the value is a number
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isNumber('3')
null

> isNumber('abc')
{message Object}

@alias module:validations.isNumber
*/
export default createValidation(isNumber, m.isNumber);

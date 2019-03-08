import createValidation from '@validarium/core/src/createValidation';
import isString from '@validarium/predicates/src/isString';
import m from './messages';

/**
Checks if value is type of string
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isString('abc')
null

> isString('')
null

> isString(123)
{message Object}

@alias module:validations.isString
*/
export default createValidation(isString, m.isString);

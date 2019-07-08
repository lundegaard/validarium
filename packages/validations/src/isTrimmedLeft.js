import createValidation from '@validarium/core/src/createValidation';
import isTrimmedLeft from '@validarium/predicates/src/isTrimmedLeft';
import m from './messages';

/**
Checkes if the string do not starts with whitespaces.

@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isTrimmedLeft('valid value')
null

> isTrimmedLeft(' invalid value')
{message Object}

@alias module:validations.isTrimmedLeft
*/
export default createValidation(isTrimmedLeft, m.isTrimmedLeft);

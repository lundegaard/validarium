import createValidation from '@validarium/core/src/createValidation';
import isTrimmedRight from '@validarium/predicates/src/isTrimmedRight';
import m from './messages';

/**
Checkes if the string do not ends with whitespaces.

@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isTrimmedRight('valid value')
null

> isTrimmedRight('invalid value  ')
{message Object}

@alias module:validations.isTrimmedRight
*/
export default createValidation(isTrimmedRight, m.isTrimmedRight);

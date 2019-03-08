import createValidation from '@validarium/core/src/createValidation';
import hasOnlyDigits from '@validarium/predicates/src/hasOnlyDigits';
import m from './messages';

/**
Checks if the value has only digits
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasOnlyDigits('123')
null

> hasOnlyDigits('12n3')
{message Object}

@alias module:validations.hasOnlyDigits
*/
export default createValidation(hasOnlyDigits, m.hasOnlyDigits);

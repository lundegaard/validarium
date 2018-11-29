import createValidation from '@validarium/core/src/createValidation';
import isRequired from '@validarium/predicates/src/isRequired';
import m from './messages';

/**
Checks if the value is present
@returns {Object} {message Object} when predicate fails or null when pass

@category other
@example
> isRequired('abc')
null

> isRequired(null)
{message Object}

@alias module:intlValidations.isRequired
*/
export default createValidation(isRequired, m.isRequired);

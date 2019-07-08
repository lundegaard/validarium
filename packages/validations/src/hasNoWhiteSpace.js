import createValidation from '@validarium/core/src/createValidation';
import hasNoWhiteSpace from '@validarium/predicates/src/hasNoWhiteSpace';
import m from './messages';

/**
Checks if a string contains no white space.
@returns {Object} {message Object} when predicate fails or null when pass
@category number
@example
> hasNoWhiteSpace("")
null

> hasNoWhiteSpace("validarium")
null

> hasNoWhiteSpace("vali darium")
{message Object}

@alias module:validations.hasNoWhiteSpace
*/
export default createValidation(hasNoWhiteSpace, m.hasNoWhiteSpace);

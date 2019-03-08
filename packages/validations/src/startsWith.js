import createValidation from '@validarium/core/src/createValidation';
import startsWith from '@validarium/predicates/src/startsWith';
import m from './messages';

/**
Checks if the value starts with specific string
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> startsWith('dog')('dogo')
null

> startsWith('dog')('cato')
{message Object}

@alias module:validations.startsWith
*/
export default string => createValidation(startsWith(string), m.startsWith, { string });

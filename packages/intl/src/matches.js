import createValidation from '@validarium/core/src/createValidation';
import matches from '@validarium/predicates/src/matches';
import m from './messages';

/**
Checks if value matches the given predicate
@param {string} - predicate
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> matches('/([a-z]a)/g')('banana')
null

> matches('/([a-z]a)/g')('blueberry')
{message Object}

@alias module:intlValidations.matches
*/
export default createValidation(matches, m.isString);

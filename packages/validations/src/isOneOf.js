import createValidation from '@validarium/core/src/createValidation';
import isOneOf from '@validarium/predicates/src/isOneOf';
import m from './messages';

/**
Checks if the value equals any list item
@param {array} - array of values
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isOneOf(['apple', 'pineapple', 'banana'])('banana')
null

> isOneOf(['apple', 'pineapple', 'banana'])('blueberry')
{message Object}

@alias module:validations.isOneOf
*/
export default list => createValidation(isOneOf(list), m.isOneOf);

import createValidation from '@validarium/core/src/createValidation';
import isNotOneOf from '@validarium/predicates/src/isNotOneOf';
import m from './messages';

/**
Checks if the value doesn't equal any list item
@param {array} - array of values
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isNotOneOf(['apple', 'pineapple', 'banana'])('banana')
null

> isNotOneOf(['apple', 'pineapple', 'banana'])('blueberry')
{message Object}

@alias module:intlValidations.isNumber
*/
export default list => createValidation(isNotOneOf(list), m.isNumber);

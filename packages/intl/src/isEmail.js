import createValidation from '@validarium/core/src/createValidation';
import isEmail from '@validarium/predicates/src/isEmail';
import m from './messages';

/**
Checks if the value is valid email
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isEmail('email@postemail.em')
null

> isEmail('emailpostemail')
{message Object}

@alias module:intlValidations.isEmail
*/
export default createValidation(isEmail, m.isEmail);

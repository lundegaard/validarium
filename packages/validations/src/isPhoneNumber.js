import createValidation from '@validarium/core/src/createValidation';
import isPhoneNumber from '@validarium/predicates/src/isPhoneNumber';
import m from './messages';

/**
Checks if the value is a valid phone number
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isPhoneNumber('980123456')
null

> isPhoneNumber('23')
{message Object}

@alias module:validations.visPhoneNumber
*/
export default createValidation(isPhoneNumber, m.isPhoneNumber);

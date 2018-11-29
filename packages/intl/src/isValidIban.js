import createValidation from '@validarium/core/src/createValidation';
import isValidIban from '@validarium/predicates/src/isValidIban';
import m from './messages';

/**
Checks if the value is a valid IBAN
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isValidIban('CH4217423156868474686')
null

> isValidIban('CZ123')
{message Object}

@alias module:intlValidations.isValidIban
*/
export default createValidation(isValidIban, m.isValidIban);

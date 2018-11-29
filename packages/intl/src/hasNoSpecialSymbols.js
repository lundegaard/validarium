import createValidation from '@validarium/core/src/createValidation';
import hasNoSpecialSymbols from '@validarium/predicates/src/hasNoSpecialSymbols';
import m from './messages';

/**
Checks if the value doesn't contain any special symbol
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasNoSpecialSymbols('abc')
null

> hasNoSpecialSymbols('a%b')
{message Object}

@alias module:intlValidations.hasNoSpecialSymbols
*/
export default createValidation(hasNoSpecialSymbols, m.hasNoSpecialSymbols);

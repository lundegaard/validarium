import createValidation from '@validarium/core/src/createValidation';
import isTrimmed from '@validarium/predicates/src/isTrimmed';
import m from './messages';

/**
Checkes if the string do not starts or ends with whitespaces.

@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isTrimmed('valid value')
null

> isTrimmed(' invalid value')
{message Object}

> isTrimmed('invalid value ')
{message Object}

> isTrimmed(' invalid value ')
{message Object}
@alias module:validations.isTrimmed
*/
export default createValidation(isTrimmed, m.isTrimmed);

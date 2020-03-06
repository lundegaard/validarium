import { ifElse, always } from 'ramda';
import { alwaysNull } from 'ramda-extension';
import isRequiredNumber from '@validarium/predicates/src/isRequiredNumber';
import m from './messages';

/**
Checks if the value is present
@returns {Object} {message Object} when predicate fails or null when pass

@category other
@example
> isRequiredNumber(0)
null

> isRequiredNumber(null)
{message Object}
@alias module:validations.isRequiredNumber
*/
export default ifElse(isRequiredNumber, alwaysNull, always({ message: m.isRequiredNumber }));

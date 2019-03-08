import { ifElse, always } from 'ramda';
import { alwaysNull, isTruthy } from 'ramda-extension';
import m from './messages';

/**
Checks if the value is present
@returns {Object} {message Object} when predicate fails or null when pass

@category other
@example
> isRequired('abc')
null

> isRequired(null)
{message Object}

@alias module:validations.isRequired
*/
export default ifElse(isTruthy, alwaysNull, always({ message: m.isRequired }));

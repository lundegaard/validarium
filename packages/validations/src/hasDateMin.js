import createValidation from '@validarium/core/src/createValidation';
import hasDateMin from '@validarium/predicates/src/hasDateMin';
import m from './messages';

/**
Checks if the the date is minimally the specified value
@param {string} - minimal date
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasDateMin('2032-07-01')('2040-07-01')
null

> hasDateMin('2032-07-01')('2032-07-01')
null

> hasDateMin('2032-07-02')('2032-07-01')
{message Object}

@alias module:validations.hasDateMin
*/
export default (min) => createValidation(hasDateMin(min), m.hasDateMin, { min });

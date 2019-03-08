import createValidation from '@validarium/core/src/createValidation';
import hasDateMax from '@validarium/predicates/src/hasDateMax';
import m from './messages';

/**
Checks if the the date is maximally the specified value
@param {string} - maximum date
@returns {Object} {message Object} when predicate fails or null when pass
@category string
@example
> hasDateMax('2032-07-01')('2020-07-01')
null

> hasDateMax('2032-07-01')('2032-07-01')
null

> hasDateMax('2032-07-01')('2032-07-02')
{message Object}

@alias module:validations.hasDateMax
*/
export default maximalDate =>
	createValidation(hasDateMax(maximalDate), m.hasDateMax, { maximalDate });

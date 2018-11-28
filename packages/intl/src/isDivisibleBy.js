import createValidation from '@validarium/core/src/createValidation';
import isDivisibleBy from '@validarium/predicates/src/isDivisibleBy';
import m from './messages';

export default divisor => createValidation(isDivisibleBy(divisor), m.isDivisibleBy, { divisor });

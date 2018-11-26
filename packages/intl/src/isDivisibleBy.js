import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default divisor => createValidation(x => x % divisor === 0, m.isDivisibleBy, { divisor });

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default createValidation(x => parseInt(x, 10) > 0, m.isPositiveNumber);

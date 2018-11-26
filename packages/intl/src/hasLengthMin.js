import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default min => createValidation(value => value.length >= min, m.minLength, { min });

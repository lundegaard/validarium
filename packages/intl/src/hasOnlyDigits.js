import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default createValidation(value => /^\d*$/.test(value), m.hasOnlyDigits);

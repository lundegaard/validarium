import createValidation from '@validarium/core/src/createValidation';
import hasLengthMin from '@validarium/predicates/src/hasLengthMin';
import m from './messages';

export default min => createValidation(hasLengthMin(min), m.minLength, { min });

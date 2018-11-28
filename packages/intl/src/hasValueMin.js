import createValidation from '@validarium/core/src/createValidation';
import hasValueMin from '@validarium/predicates/src/hasValueMin';
import m from './messages';

export default min => createValidation(hasValueMin(min), m.hasValueMin, { min });

import createValidation from '@validarium/core/src/createValidation';
import isNumber from '@validarium/predicates/src/isNumber';
import m from './messages';

export default createValidation(isNumber, m.isNumber);

import createValidation from '@validarium/core/src/createValidation';
import hasOnlyDigits from '@validarium/predicates/src/hasOnlyDigits';
import m from './messages';

export default createValidation(hasOnlyDigits, m.hasOnlyDigits);

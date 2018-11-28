import createValidation from '@validarium/core/src/createValidation';
import isPhoneNumber from '@validarium/predicates/src/isPhoneNumber';
import m from './messages';

export default createValidation(isPhoneNumber, m.isPhoneNumber);

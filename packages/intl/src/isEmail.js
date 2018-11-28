import createValidation from '@validarium/core/src/createValidation';
import isEmail from '@validarium/predicates/src/isEmail';
import m from './messages';

export default createValidation(isEmail, m.isEmail);

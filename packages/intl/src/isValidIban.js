import createValidation from '@validarium/core/src/createValidation';
import isValidIban from '@validarium/predicates/src/isValidIban';
import m from './messages';

export default createValidation(isValidIban, m.isValidIban);

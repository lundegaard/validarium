import createValidation from '@validarium/core/src/createValidation';
import isRequired from '@validarium/predicates/src/isRequired';
import m from './messages';

export default createValidation(isRequired, m.isRequired);

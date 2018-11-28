import createValidation from '@validarium/core/src/createValidation';
import isInteger from '@validarium/predicates/src/isInteger';
import m from './messages';

export default createValidation(isInteger, m.isInteger);

import createValidation from '@validarium/core/src/createValidation';
import isPositiveNumber from '@validarium/predicates/src/isPositiveNumber';
import m from './messages';

export default createValidation(isPositiveNumber, m.isPositiveNumber);

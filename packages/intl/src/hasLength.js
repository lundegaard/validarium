import createValidation from '@validarium/core/src/createValidation';
import hasLength from '@validarium/predicates/src/hasLength';
import m from './messages';

export default length => createValidation(hasLength(length), m.hasLength, { length });

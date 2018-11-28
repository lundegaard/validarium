import createValidation from '@validarium/core/src/createValidation';
import hasValueMax from '@validarium/predicates/src/hasValueMax';
import m from './messages';

export default max => createValidation(hasValueMax(max), m.hasValueMax, { max });

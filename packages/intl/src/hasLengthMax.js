import createValidation from '@validarium/core/src/createValidation';
import hasLengthMax from '@validarium/predicates/src/hasLengthMax';
import m from './messages';

export default max => createValidation(hasLengthMax(max), m.hasLengthMax, { max });

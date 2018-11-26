import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

// TODO: refactor with R_
export default max => createValidation(value => value.length <= max, m.hasLengthMax, { max });

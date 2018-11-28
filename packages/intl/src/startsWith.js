import createValidation from '@validarium/core/src/createValidation';
import startsWith from '@validarium/predicates/src/startsWith';
import m from './messages';

export default string => createValidation(startsWith(string), m.startsWith, { string });

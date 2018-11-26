import { startsWith } from 'ramda';

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default string => createValidation(startsWith(string), m.startsWith, { string });

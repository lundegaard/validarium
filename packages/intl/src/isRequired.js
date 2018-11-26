import { T } from 'ramda';

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default createValidation(T, m.isRequired);

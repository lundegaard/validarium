import { isNumeric } from 'ramda-extension';

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default createValidation(isNumeric, m.isNumber);

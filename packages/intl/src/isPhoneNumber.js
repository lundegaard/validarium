import { isPhoneNumber } from '@validarium/core/src/utils';

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default createValidation(isPhoneNumber, m.isPhoneNumber);

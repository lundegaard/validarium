import { test } from 'ramda';

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

const testIsInteger = test(/^-?[0-9]+$/);

export default createValidation(testIsInteger, m.isInteger);

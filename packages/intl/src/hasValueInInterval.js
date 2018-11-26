import { between } from 'ramda-extension';

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default (min, max) => createValidation(between(min, max), m.hasValueInInterval, { max });

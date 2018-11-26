import { o, length } from 'ramda';
import { between } from 'ramda-extension';

import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default (min, max) =>
	createValidation(o(between(min, max), length), m.hasLengthInInterval, { max, min });

import { lte } from 'ramda';
import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default min => createValidation(lte(min), m.hasValueMin, { min });

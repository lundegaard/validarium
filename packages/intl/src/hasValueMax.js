import { gte } from 'ramda';
import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default max => createValidation(gte(max), m.hasValueMax, { max });

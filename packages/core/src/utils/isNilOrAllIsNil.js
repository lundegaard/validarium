import { anyPass, allPass, isNil } from 'ramda';
import { isArray } from 'ramda-extension';
import allIsNil from './allIsNil';

export default anyPass([isNil, allPass([isArray, allIsNil])]);

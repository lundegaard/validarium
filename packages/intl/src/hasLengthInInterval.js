import createValidation from '@validarium/core/src/createValidation';
import hasLengthInInterval from '@validarium/predicates/src/hasLengthInInterval';
import m from './messages';

export default (min, max) =>
	createValidation(hasLengthInInterval(min, max), m.hasLengthInInterval, { max, min });

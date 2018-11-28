import createValidation from '@validarium/core/src/createValidation';
import hasValueInInterval from '@validarium/predicates/src/hasValueInInterval';
import m from './messages';

export default (min, max) =>
	createValidation(hasValueInInterval(min, max), m.hasValueInInterval, { max, min });

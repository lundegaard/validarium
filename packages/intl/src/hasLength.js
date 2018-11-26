import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default length =>
	createValidation(value => value.length === length, m.hasLength, { length });

import { test } from 'ramda';
import createValidation from '@validarium/core/src/createValidation';
import m from './messages';

export default createValidation(
	test(/[^_~`!#$%\^&*+=\-\[\]\\;,.\/{}@´'§|\\":<>\?]/g),
	m.hasNoSpecialSymbols
);

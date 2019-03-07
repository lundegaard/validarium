import { test } from 'ramda';

/**
@alias module:predicates.hasNoSpecialSymbols
*/
export default test(/^[^_~`!#$%\^&*+=\-\[\]\\;,.\/{}@´'§|\\":<>\?]*$/g);

import { test } from 'ramda';

/**
@alias module:predicates.isTrimmed
*/
const isTrimmed = test(/^\S([\S\s]*?)\S$|^\S*$/);

export default isTrimmed;

import { test } from 'ramda';

const isTrimmedRight = test(/\S$|^\S*$/);

/**
@alias module:predicates.isTrimmedRight
*/
export default isTrimmedRight;

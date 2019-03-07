import { match, o } from 'ramda';
import { isNotEmpty } from 'ramda-extension';

/**
@alias module:predicates.matches
*/
export default reg => o(isNotEmpty, match(reg));

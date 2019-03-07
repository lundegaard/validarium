import { gte, identity, useWith, length } from 'ramda';

/**
@alias module:predicates.hasLengthMax
*/
export default useWith(gte, [identity, length]);

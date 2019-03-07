import { lte, identity, useWith, length } from 'ramda';

/**
@alias module:predicates.hasLengthMin
*/
export default useWith(lte, [identity, length]);

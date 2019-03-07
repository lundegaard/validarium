import { useWith, equals, identity, length } from 'ramda';

/**
@alias module:predicates.hasLength
*/
export default useWith(equals, [identity, length]);

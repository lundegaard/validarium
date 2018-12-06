import { useWith, equals, identity, length } from 'ramda';

export default useWith(equals, [identity, length]);

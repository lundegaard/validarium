import { useWith, equals, curry, identity, length } from 'ramda';

export default curry(useWith(equals, [identity, length]));

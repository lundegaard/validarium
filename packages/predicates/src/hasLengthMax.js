import { gte, identity, useWith, curry, length } from 'ramda';

export default curry(useWith(gte, [identity, length]));

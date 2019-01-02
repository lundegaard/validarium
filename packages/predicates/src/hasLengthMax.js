import { gte, identity, useWith, length } from 'ramda';

export default useWith(gte, [identity, length]);

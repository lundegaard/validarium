import { lte, identity, useWith, length } from 'ramda';

export default useWith(lte, [identity, length]);

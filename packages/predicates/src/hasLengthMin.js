import { lte, identity, useWith, curry, length } from 'ramda';

export default curry(useWith(lte, [identity, length]));

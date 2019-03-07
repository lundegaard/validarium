import { flip } from 'ramda';

import { containsAny } from 'ramda-extension';

const flipContains = flip(containsAny);

/**
@alias module:predicates.isOneOf
*/
export default flipContains;

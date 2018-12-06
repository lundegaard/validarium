import { flip } from 'ramda';

import { containsAny } from 'ramda-extension';

const flipContains = flip(containsAny);

export default flipContains;

import { flip, o, not } from 'ramda';

import { containsAny } from 'ramda-extension';

const flipContains = flip(containsAny);

export default list => o(not, flipContains(list));

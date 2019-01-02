import { match, o } from 'ramda';
import { isNotEmpty } from 'ramda-extension';

export default reg => o(isNotEmpty, match(reg));

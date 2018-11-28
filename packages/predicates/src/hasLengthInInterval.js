import { o, length } from 'ramda';
import { between } from 'ramda-extension';

export default (min, max) => o(between(min, max), length);

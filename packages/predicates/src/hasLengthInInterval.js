import { o, length } from 'ramda';
import { between } from 'ramda-extension';

/**
@alias module:predicates.hasLengthInterval
*/
export default (min, max) => o(between(min, max), length);

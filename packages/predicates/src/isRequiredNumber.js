import { anyPass } from 'ramda';
import { equalsToZero, isTruthy } from 'ramda-extension';

/**
@alias module:predicates.isRequiredNumber
*/
const isRequiredNumber = anyPass([equalsToZero, isTruthy]);

export default isRequiredNumber;

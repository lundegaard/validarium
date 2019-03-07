import { test, anyPass } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';

/**
@alias module:predicates.isPhoneNumber
*/
export default anyPass([isNilOrEmptyString, test(/^\d{9}$/)]);

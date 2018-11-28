import { test, anyPass } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';

export default anyPass([isNilOrEmptyString, test(/^\d{9}$/)]);

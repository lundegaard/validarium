import { test, anyPass } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';

const testPhoneNumber = test(/^\d{9}$/);

export default anyPass([isNilOrEmptyString, testPhoneNumber]);

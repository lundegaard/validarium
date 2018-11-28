import { test, both, either } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';
import hasLengthMax from './hasLengthMax';

// eslint-disable-next-line max-len
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default either(isNilOrEmptyString, both(test(emailRegExp), hasLengthMax(200)));

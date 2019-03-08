import { curry, o } from 'ramda';
import { validate } from '@validarium/core';
import translateResult from './translateResult';

/**
 * Composed validate with translate. Gives you translated result directly.
 * Params are curried
 *
 * @param {Object} intl
 * @param {Object} scheme
 * @param {Object} values
 * @return {Object} Translated result.
 * @sig Object -> Object -> Object -> Object
 *
 * @alias module:intl.validateTranslated
 */
export default curry((intl, scheme, values) => o(translateResult(intl), validate(scheme), values));

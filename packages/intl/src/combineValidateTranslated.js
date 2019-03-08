import { o } from 'ramda';
import { combineValidate } from '@validarium/core';
import translateResult from './translateResult';

/**
 * combine combineValidate with translate result.
 *
 * @param {Object} intl
 * @param  {...Function} fns Validation functions.
 * @param {Object} values
 * @return {Object} Translated result.
 * @sig (Object, ...Functions) -> Object -> Object
 *
 * @alias module:intl.validateTranslated
 */
export default (intl, ...validates) => values =>
	o(translateResult(intl), combineValidate(...validates), values);

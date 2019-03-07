import { useWith, lte } from 'ramda';
import { makeDateWithoutHours } from './utils';

/**
@alias module:predicates.hasDateMin
*/
export default useWith(lte, [makeDateWithoutHours, makeDateWithoutHours]);

import { useWith, gte } from 'ramda';
import { makeDateWithoutHours } from './utils';

/**
@alias module:predicates.hasDateMax
*/
export default useWith(gte, [makeDateWithoutHours, makeDateWithoutHours]);

import { useWith, gte } from 'ramda';
import { makeDateWithoutHours } from './utils';

export default useWith(gte, [makeDateWithoutHours, makeDateWithoutHours]);

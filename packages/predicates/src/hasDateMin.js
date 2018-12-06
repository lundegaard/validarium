import { useWith, lte } from 'ramda';
import { makeDateWithoutHours } from './utils';

export default useWith(lte, [makeDateWithoutHours, makeDateWithoutHours]);

import { curry, flip, modulo, compose } from 'ramda';
import { equalsToZero } from 'ramda-extension';

const isDivisible = compose(
	equalsToZero,
	modulo
);
export default curry(flip(isDivisible));

import { ifElse, allPass, always } from 'ramda';
import { alwaysNull, isNotNil, isNotEmpty } from 'ramda-extension';

export default (predicate, message, messageValues) =>
	ifElse(
		allPass([isNotNil, isNotEmpty, predicate]),
		alwaysNull,
		always({ message, messageValues })
	);

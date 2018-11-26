import { always, ifElse } from 'ramda';
import { alwaysNull } from 'ramda-extension';

export default (predicate, message, messageValues) =>
	ifElse(predicate, alwaysNull, always({ message, messageValues }));

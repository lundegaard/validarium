import { split, compose, join, o, keys, prop, prepend, tail, map } from 'ramda';
import { toPascalCase, toKebabCase } from 'ramda-extension';

export const getGlobalName = compose(
	join(''),
	prepend('Validarium'),
	map(toPascalCase),
	tail,
	split('/')
);

export const getFileName = compose(
	join('-'),
	prepend('validarium'),
	map(toKebabCase),
	tail,
	split('/')
);

export const getPeers = o(keys, prop('peerDependencies'));

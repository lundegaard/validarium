import {
	replace,
	splitAt,
	compose,
	reverse,
	pipe,
	map,
	when,
	__,
	o,
	subtract,
	modulo,
	slice,
	toString,
	concat,
	ifElse,
	length,
	drop,
	converge,
	identity,
	equals,
	invoker,
} from 'ramda';
import { isNotNumeric, ltThanLength, listToString } from 'ramda-extension';

const minus55 = subtract(__, 55);
const decodeChar = o(minus55, invoker(0, 'charCodeAt'));
const removeWhiteSpaces = replace(/ /g, '');
const modulo97 = o(modulo(__, 97), parseInt);
const take9chars = slice(0, 9);
const drop9charsFromIban = converge(drop, [o(length, take9chars), identity]);
const moduloOfFirst9Chars = compose(
	toString,
	modulo97,
	take9chars
);
const computeReducedIban = converge(concat, [moduloOfFirst9Chars, drop9charsFromIban]);

const moveFirstFourCharsToEnd = compose(
	listToString,
	reverse,
	splitAt(4)
);

// on wikipedia they are using hardcoded values, but the value of number can be computed with ascii code - 55
const expandTextCharToNumber = o(listToString, map(when(isNotNumeric, decodeChar)));

// javascript is not capable to compute module on whole number
// https://en.wikipedia.org/wiki/International_Bank_Account_Number#Modulo_operation_on_IBAN
const iso7064Mod97 = ifElse(ltThanLength(2), o(c => iso7064Mod97(c), computeReducedIban), modulo97);

// based on https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN
/**
@alias module:predicates.isValidIban
*/
export default pipe(
	removeWhiteSpaces,
	moveFirstFourCharsToEnd,
	expandTextCharToNumber,
	iso7064Mod97,
	equals(1)
);

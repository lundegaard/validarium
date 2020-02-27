/**
 * This package contains all predicates used in validation functions. Name and usage is self explanatory. If not, please look at the tests.
 *
 * You can use them for composing custom functionality.
 *
 * @module predicates
 */
export { default as hasLength } from './hasLength';
export { default as hasLengthInInterval } from './hasLengthInInterval';
export { default as hasLengthMax } from './hasLengthMax';
export { default as hasLengthMin } from './hasLengthMin';
export { default as hasNoSpecialSymbols } from './hasNoSpecialSymbols';
export { default as hasOnlyDigits } from './hasOnlyDigits';
export { default as hasValueInInterval } from './hasValueInInterval';
export { default as hasValueMax } from './hasValueMax';
export { default as hasValueMin } from './hasValueMin';
export { default as isDivisibleBy } from './isDivisibleBy';
export { default as isEmail } from './isEmail';
export { default as isInteger } from './isInteger';
export { default as isNumber } from './isNumber';
export { default as isPhoneNumber } from './isPhoneNumber';
export { default as isPositiveNumber } from './isPositiveNumber';
export { default as isRequired } from './isRequired';
export { default as isValidIban } from './isValidIban';
export { default as startsWith } from './startsWith';
export { default as hasNoWhiteSpace } from './hasNoWhiteSpace';
export { default as isTrimmed } from './isTrimmed';
export { default as isTrimmedLeft } from './isTrimmedLeft';
export { default as isTrimmedRight } from './isTrimmedRight';

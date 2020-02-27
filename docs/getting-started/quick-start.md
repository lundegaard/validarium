# Quick start

<!-- ```jsx
TODO: is it really necessary to have this example ?
// Unclean validations definition

export const getValidate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (values.email.length < 200) {
		errors.username = 'Must be shorter than 200 characters';
	}
	if (!values.age) {
		errors.age = 'Required';
	} else if (isNaN(Number(values.age))) {
		errors.age = 'Must be a number';
	} else if (Number(values.age) < 90) {
		errors.age = 'Sorry, you must be at least 18 years old';
	}
	return errors;
};
``` -->

## Library usage

```js
import {
	isRequired,
	isEmail,
	isString,
	hasAgeInInterval,
	hasOnlyDigits,
	hasDateMin,
} from '@validarium/validations';
import { validate, combineValidate, validateMany } from '@validarium/core';
```

## Simple usage

```js
const simpleValidations = validate({
	email: [isRequired, isEmail, hasLengthMax(200)],
	age: [isRequired, isNumber, hasValueMin(18)],
});

simpleValidations(valuesToValidate);
```

## Nested validation object

```js
const nestedObject = validate({
	user: [
		validate({
			email: [isRequired],
		}),
	],
});
```

## Nested validation arrays

```js
const nestedArray = validate({
	users: [
		validateMany({
			email: [isRequired],
		}),
	],
});
```

## Combine validations

```js
const isValidUsername = combineValidate(hasNoSpecialSymbols, hasNoWhiteSpace);

const fieldValidations = validate({ username: [isRequired, isValidUsername] });

fieldValidations({ username: ' $ invalid username' });
```

## Combine multiple validation schemes

```js
const megaValidator = combineValidate(simpleValidations, nestedArray, nestedObject);

megaValidator(valuesToValidate);
```

## Usage with intl

```js
import { translateResult, validateTranslated, combineValidateTranslated } from '@validarium/intl';

translateResult(intl)(fieldValidations(valuesToValidate)); // gives translated result
validateTranslated(intl, { scheme })(valuesToValidate); // note cannot have nested scheme or be used in combination
combineValidateTranslated(intl, simpleValidations, nestedArray, nestedObject)(valuesToValidate); // ultimate solution
```


# Validarium

![MIT License][license-badge]
[![build status](https://img.shields.io/travis/lundegaard/validarium/master.svg?style=flat-square)](https://travis-ci.org/lundegaard/validarium)
[![GitHub Stars](https://img.shields.io/github/stars/lundegaard/validarium)](https://github.com/lundegaard/validarium)
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[downloads-badge]: https://img.shields.io/npm/dm/@validarium/core.svg
[version-badge]: https://flat.badgen.net/npm/v/@validarium/core
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/@validarium/core
An agnostic validation library for JavaScript applications. With optional support for react-intl.

[`Try It`](https://runkit.com/aizerin/validarium)

## Features

This library provides an easy way how to validate your inputs in JavaScript.
Every validation is optional and null-safe. If you want to make required validations, then please use `isRequired` validation.

It provides four main packages.

[`@validarium/core`](packages/core/README.md)

- contains core functionalities for creating validation definitions.

[`@validarium/predicates`](packages/predicates/README.md)

- contains predicates which are can be used separately to define you own validation functions.

[`@validarium/validations`](packages/validations/README.md)

- contains validation functions which are composed from predicates and has default message.

[`@validarium/intl`](packages/intl/README.md)

- contains translator and convenient validation API for react-intl.
  <br />
  <br />

## Installation

Install desired packages

`yarn add @validarium/core @validarium/intl @validarium/validations`

or

`npm i @validarium/core @validarium/intl @validarium/validations`

<br />
<br />

## Examples

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

### Library usage

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

### Simple usage

```js
const simpleValidations = validate({
	email: [isRequired, isEmail, hasLengthMax(200)],
	age: [isRequired, isNumber, hasValueMin(18)],
});

simpleValidations(valuesToValidate);
```

### Nested validation object

```js
const nestedObject = validate({
	user: [
		validate({
			email: [isRequired],
		}),
	],
});
```

### Nested validation arrays

```js
const nestedArray = validate({
	users: [
		validateMany({
			email: [isRequired],
		}),
	],
});
```

### Combine validations

```js
const isValidUsername = combineValidate(hasNoSpecialSymbols, hasNoWhiteSpace);

const fieldValidations = validate({ username: [isRequired, isValidUsername] });

fieldValidations({ username: ' $ invalid username' });
```

### Combine multiple validation schemes

```js
const megaValidator = combineValidate(simpleValidations, nestedArray, nestedObject);

megaValidator(valuesToValidate);
```

### Usage with intl

```js
import { translateResult, validateTranslated, combineValidateTranslated } from '@validarium/intl';

translateResult(intl)(fieldValidations(valuesToValidate)); // gives translated result
validateTranslated(intl, { scheme })(valuesToValidate); // note cannot have nested scheme or be used in combination
combineValidateTranslated(intl, simpleValidations, nestedArray, nestedObject)(valuesToValidate); // ultimate solution
```

## third-party library integrations

### redux-form

```js
...
reduxForm({
	form: 'exampleForm',
	validate: fieldValidations,
});
```

### Predicates with redux-form fields

```js
import { isEmail, hasLengthMax, isRequired } from '@validarium/predicates';
...
<Field name="username" type="text"
 component={renderField} label="Username"
 validate={[ isRequired, hasLengthMax(15) ]}
 />
```

### formik

```jsx
<Formik validate={fieldValidations} />
```

<br />
<br />


## Contribution

We are open to any ideas and suggestions! Feel free to make PR!
<br />
<br />

## See our related projects

* [@redux-tools](https://github.com/lundegaard/redux-tools)
* [react-union](https://github.com/lundegaard/react-union)

© 2018-2019 Lundegaard a.s.

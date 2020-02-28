<p align="center">
  <a href="https://validarium.js.org">
    <img alt="Validarium" src="https://validarium.js.org/_media/logo.png" width="300" />
  </a>
</p>

<h1 align="center">
  <a href="https://lundegaard.eu">
    <img alt="by Lundegaard" src="https://validarium.js.org/_media/by-lundegaard.png" width="120" />
  </a>
</h1>

<h3 align="center">
🖍️ 🛡  🚀
</h3>

<h3 align="center">
Validations done right.
</h3>

<p align="center">
An agnostic validation library for JavaScript applications with optional built-in support for <a href="https://formatjs.io/">formatjs</a> and <a href="https://github.com/formatjs/react-intl">react-intl</a>.
</p>

<p align="center">
Create your validation schema based on priciples of functional programming.
</p>

<p align="center">
<a href="https://runkit.com/aizerin/validarium">Try It.</a>
</p>

<p align="center">
  <a href="https://github.com/lundegaard/validarium">
    <img src="https://flat.badgen.net/badge/-/github?icon=github&label" alt="Github" />
  </a>

  <img src="https://flat.badgen.net/badge/license/MIT/blue" alt="MIT License" />

  <a href="https://travis-ci.org/lundegaard/validarium">
    <img src="https://img.shields.io/travis/lundegaard/validarium/master.svg?style=flat-square" alt="Travis" />
  </a>

  <a href="https://npmjs.com/package/validarium">
    <img src="https://img.shields.io/npm/dm/@validarium/core.svg" alt="Downloads" />
  </a>

   <a href="https://npmjs.com/package/validarium">
    <img src="https://flat.badgen.net/npm/v/validarium" alt="Version" />
  </a>
</p>

## Features

This library provides an easy way how to validate your inputs in JavaScript.
Every validation is optional and null-safe. If you want to make required validations, then please use `isRequired` validation.

The main package [`validarium`](packages/validarium/README.md) exports all functions from both `@validarium/core` and `@validarium/validations`. 

For advanced usage you can use validarium packages separately:

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

### yarn

```
yarn add validarium
```

Additional packages:
```
yarn add @validarium/intl
```

### npm

```
npm i validarium
```

Additional packages:

```
npm i @validarium/intl
```

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
	validate,
  combineValidate,
	validateMany 
} from 'validarium';
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

See [contribution guide](https://github.com/lundegaard/validarium/blob/master/CONTRIBUTING.md) for guidelines.
<br />
<br />

## See our related projects

* [@redux-tools](https://github.com/lundegaard/redux-tools) - Modular Redux is possible!
* [react-union](https://github.com/lundegaard/react-union) - Intergrate React apps into various CMSs seamlessly.
* [lundium](https://github.com/lundegaard/lundium) - Beautiful React component library.

© 2018-2020 Lundegaard a.s.

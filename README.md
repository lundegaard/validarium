# Validarium

[![build status](https://img.shields.io/travis/lundegaard/validarium/master.svg?style=flat-square)](https://travis-ci.org/lundegaard/validarium)

An validation library for JavaScript applications. Ready to be used with react-intl.
<br />
<br />

[`Try It`](https://runkit.com/aizerin/validarium)

## Features

This library provides an easy way how to validate your inputs in JavaScript. It provides three main packages.

[`@validarium/core`](packages/core/README.md)

- contains core functionalities for creating validation definitions.

[`@validarium/predicates`](packages/predicates/README.md)

- contains predicates which are can be used separately to define you own validation functions.

[`@validarium/intl`](packages/intl/README.md)

- contains validation functions with Intl localization support.
  <br />
  <br />

## Installation

Install desired packages

`yarn add @validarium/core @validarium/intl`

or

`npm i @validarium/core @validarium/intl`

<br />
<br />

## Examples

### @validarium/core and @validarium/intl example

```jsx
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
```

```jsx
// Clean validation definition

import {
	isRequired,
	isEmail,
	isString,
	hasAgeInInterval,
	hasOnlyDigits,
	hasDateMin,
} from '@validarium/intl';
import { validate, createMainValidate } from '@validarium/core';

const fieldValidations = validate({
	email: [isRequired, isEmail, hasLengthMax(200)],
	age: [isRequired, isNumber, hasValueMin(18)],
});

export const getValidate = createMainValidate(fieldValidations);
```

```js
// Redux form usage

...
export default reduxForm({
	form: 'exampleForm',
	validate: getValidate,
})(FormComponent);
```

```jsx
// Formik usage

...
export default (props) =>
<Formik validate={getValidate(props)}>...</Formik>
...
```

### @validarium/predicates with redux-form

```js
// import desired predicates
import { isEmail, hasLengthMax } from '@validarium/predicates';
...
// use predicates on fields
<form onSubmit={handleSubmit}>
      <Field name="username" type="text"
        component={renderField} label="Username"
        validate={[ required, maxLength(15) ]}
      />
      <Field name="email" type="email"
        component={renderField} label="Email"
        validate={isEmail}
      />
</form>
...
```

<br />
<br />

## Contribution

We are open to any ideas and suggestions! Feel free to make PR!
<br />
<br />

© 2018 Lundegaard a.s.

# Validarium {docsify-ignore-all}

![MIT License][license-badge]
[![build status](https://img.shields.io/travis/lundegaard/validarium/master.svg?style=flat-square)](https://travis-ci.org/lundegaard/validarium)
[![GitHub Stars](https://img.shields.io/github/stars/lundegaard/validarium)](https://github.com/lundegaard/validarium)
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[downloads-badge]: https://img.shields.io/npm/dm/@validarium/core.svg
[version-badge]: https://flat.badgen.net/npm/v/@validarium/core
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/@validarium/core

[Open Validarium in a RunKit sandbox!](https://runkit.com/aizerin/validarium)

Platform-agnostic validation library for JavaScript applications with extra focus on composable validations and message translations. Includes (pretty much) out-of-the-box support for both [Redux Form](https://redux-form.com/) and [React Intl](https://github.com/formatjs/react-intl).

```js
import { validate, isRequired, isEmail, hasLengthMax, hasValueMin } from 'validarium';

const validateUserForm = validate({
	email: [isRequired, isEmail, hasLengthMax(200)],
	age: [isRequired, isNumber, hasValueMin(18)],
});

validateUserForm({ email: 'something', age: 16 });
// Returns { email: EmailMessage, age: NumberMessage }
//
// EmailMessage is { id: 'validarium.isEmail', defaultMessage: 'Not a valid email format' }
// NumberMessage is { id: 'validarium.isNumber', defaultMessage: 'Not a number' }
```

Every validation is optional and null-safe. If you want to test against `null`, please use the `isRequired` validation. Validarium also supports:

- Validating field arrays.
- Nested validations.
- Combining multiple validation schemas.
- Overriding validation messages with custom ones.

## Packages

The main package `validarium` exports all the functions you'll need to get started (exported from `@validarium/core` and `@validarium/validations`).

For advanced usage you can use the individual Validarium packages separately:

- [@validarium/core](packages/core), core functionality for creating validation definitions
- [@validarium/validations](packages/validations), validations: predicates with a default message
- [@validarium/predicates](packages/predicates), predicates that can be reused to define your own validations
- [@validarium/intl](packages/intl), utility functions for use with React Intl

## Installation

Use either of these commands based on the package manager you prefer.

```sh
yarn add validarium
```

```sh
npm i validarium
```

## Related projects

- [@redux-tools](https://github.com/lundegaard/redux-tools) – Maintaining large Redux applications with ease.
- [react-union](https://github.com/lundegaard/react-union) – Integrate React apps into various CMSs seamlessly.
- [lundium](https://github.com/lundegaard/lundium) – Beautiful React component library.

## License

All packages are distributed under the MIT license. See the license [here](https://github.com/lundegaard/validarium/blob/master/LICENSE).

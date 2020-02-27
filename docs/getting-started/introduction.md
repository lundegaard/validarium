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

[`Try It`](https://runkit.com/aizerin/validarium)

## Features

This library provides an easy way how to validate your inputs in JavaScript.
Every validation is optional and null-safe. If you want to make required validations, then please use `isRequired` validation.

The main package `validarium` exports all functions from both `@validarium/core` and `@validarium/validations`. 

For advanced usage you can use validarium packages separately:

[`@validarium/core`](packages/core)

- contains core functionalities for creating validation definitions.

[`@validarium/predicates`](packages/predicates)

- contains predicates which are can be used separately to define you own validation functions.

[`@validarium/validations`](packages/validations)

- contains validation functions which are composed from predicates and has default message.

[`@validarium/intl`](packages/intl)

- contains translator and convenient validation API for react-intl.
  <br />
  <br />

## Installation {docsify-ignore-all}

Install desired packages.

### yarn {docsify-ignore}

```
yarn add validarium
```

Additional packages:
```
yarn add @validarium/intl @validarium/intl
```

### npm {docsify-ignore}

```
npm i validarium
```

Additional packages:

```
npm i @validarium/intl @validarium/intl
```

<br />
<br />

## Contribution

We are open to any ideas and suggestions! Feel free to make PR!

See [contribution guide](contributing) for guidelines.
<br />
<br />

## Related projects

* [@redux-tools](https://github.com/lundegaard/redux-tools) - Modular Redux is possible!
* [react-union](https://github.com/lundegaard/react-union) - Intergrate React apps into various CMSs seamlessly.
* [lundium](https://github.com/lundegaard/lundium) - Beautiful React component library.

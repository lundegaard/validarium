# Validarium

[![build status](https://img.shields.io/travis/lundegaard/validarium/master.svg?style=flat-square)](https://travis-ci.org/lundegaard/validarium)

An agnostic validation library for JavaScript applications. With optional support for react-intl.
<br />
<br />

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


## Contribution

We are open to any ideas and suggestions! Feel free to make PR!
<br />
<br />

## See our related projects

* [@redux-tools](https://github.com/lundegaard/redux-tools)
* [react-union](https://github.com/lundegaard/react-union)

© 2018-2019 Lundegaard a.s.

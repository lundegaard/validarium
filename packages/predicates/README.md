# Predicates
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
Platform-agnostic validation library for JavaScript applications with extra focus on composable validations and message translations. Includes (pretty much) out-of-the-box support for both <a href="https://redux-form.com/">Redux Form</a> and <a href="https://github.com/formatjs/react-intl">React Intl</a>.
</p>

<p align="center">
Create your validation schema based on priciples of functional programming.
</p>

<p align="center">
<a href="https://runkit.com/aizerin/validarium">Open Validarium in a RunKit sandbox!</a>
</p>

<p align="center">
<a href="https://validarium.js.org">See our documentation site.</a>
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

This package contains all predicates used in validation functions.
Name and usage is self explanatory. If not, please look at the tests.

You can use them for composing custom functionality.
	
## API reference
 <a name="module_predicates"></a>

# predicates
This package contains all predicates used in validation functions. Name and usage is self explanatory. If not, please look at the tests.

You can use them for composing custom functionality.


* [predicates](#module_predicates)
    * [.hasDateMax](#module_predicates.hasDateMax)
    * [.hasDateMin](#module_predicates.hasDateMin)
    * [.hasLength](#module_predicates.hasLength)
    * [.hasLengthMax](#module_predicates.hasLengthMax)
    * [.hasLengthMin](#module_predicates.hasLengthMin)
    * [.hasNoSpecialSymbols](#module_predicates.hasNoSpecialSymbols)
    * [.hasNoWhiteSpace](#module_predicates.hasNoWhiteSpace)
    * [.hasOnlyDigits](#module_predicates.hasOnlyDigits)
    * [.hasValueInInterval](#module_predicates.hasValueInInterval)
    * [.hasValueMax](#module_predicates.hasValueMax)
    * [.hasValueMin](#module_predicates.hasValueMin)
    * [.isDivisibleBy](#module_predicates.isDivisibleBy)
    * [.isEmail](#module_predicates.isEmail)
    * [.isInteger](#module_predicates.isInteger)
    * [.isNegativeNumber](#module_predicates.isNegativeNumber)
    * [.isNumber](#module_predicates.isNumber)
    * [.isOneOf](#module_predicates.isOneOf)
    * [.isPhoneNumber](#module_predicates.isPhoneNumber)
    * [.isPositiveNumber](#module_predicates.isPositiveNumber)
    * [.isRequired](#module_predicates.isRequired)
    * [.isString](#module_predicates.isString)
    * [.isTrimmedLeft](#module_predicates.isTrimmedLeft)
    * [.isTrimmedRight](#module_predicates.isTrimmedRight)
    * [.isValidIban](#module_predicates.isValidIban)
    * [.isTrimmed](#module_predicates.isTrimmed)
    * [.hasAgeInInterval()](#module_predicates.hasAgeInInterval)
    * [.hasLengthInterval()](#module_predicates.hasLengthInterval)
    * [.isNotOneOf()](#module_predicates.isNotOneOf)
    * [.matches()](#module_predicates.matches)
    * [.startsWith()](#module_predicates.startsWith)


* * *

<a name="module_predicates.hasDateMax"></a>

## predicates.hasDateMax

* * *

<a name="module_predicates.hasDateMin"></a>

## predicates.hasDateMin

* * *

<a name="module_predicates.hasLength"></a>

## predicates.hasLength

* * *

<a name="module_predicates.hasLengthMax"></a>

## predicates.hasLengthMax

* * *

<a name="module_predicates.hasLengthMin"></a>

## predicates.hasLengthMin

* * *

<a name="module_predicates.hasNoSpecialSymbols"></a>

## predicates.hasNoSpecialSymbols

* * *

<a name="module_predicates.hasNoWhiteSpace"></a>

## predicates.hasNoWhiteSpace

* * *

<a name="module_predicates.hasOnlyDigits"></a>

## predicates.hasOnlyDigits

* * *

<a name="module_predicates.hasValueInInterval"></a>

## predicates.hasValueInInterval

* * *

<a name="module_predicates.hasValueMax"></a>

## predicates.hasValueMax

* * *

<a name="module_predicates.hasValueMin"></a>

## predicates.hasValueMin

* * *

<a name="module_predicates.isDivisibleBy"></a>

## predicates.isDivisibleBy

* * *

<a name="module_predicates.isEmail"></a>

## predicates.isEmail

* * *

<a name="module_predicates.isInteger"></a>

## predicates.isInteger

* * *

<a name="module_predicates.isNegativeNumber"></a>

## predicates.isNegativeNumber

* * *

<a name="module_predicates.isNumber"></a>

## predicates.isNumber

* * *

<a name="module_predicates.isOneOf"></a>

## predicates.isOneOf

* * *

<a name="module_predicates.isPhoneNumber"></a>

## predicates.isPhoneNumber

* * *

<a name="module_predicates.isPositiveNumber"></a>

## predicates.isPositiveNumber

* * *

<a name="module_predicates.isRequired"></a>

## predicates.isRequired

* * *

<a name="module_predicates.isString"></a>

## predicates.isString

* * *

<a name="module_predicates.isTrimmedLeft"></a>

## predicates.isTrimmedLeft

* * *

<a name="module_predicates.isTrimmedRight"></a>

## predicates.isTrimmedRight

* * *

<a name="module_predicates.isValidIban"></a>

## predicates.isValidIban

* * *

<a name="module_predicates.isTrimmed"></a>

## predicates.isTrimmed

* * *

<a name="module_predicates.hasAgeInInterval"></a>

## predicates.hasAgeInInterval()

* * *

<a name="module_predicates.hasLengthInterval"></a>

## predicates.hasLengthInterval()

* * *

<a name="module_predicates.isNotOneOf"></a>

## predicates.isNotOneOf()

* * *

<a name="module_predicates.matches"></a>

## predicates.matches()

* * *

<a name="module_predicates.startsWith"></a>

## predicates.startsWith()

* * *




## Related projects

- [@redux-tools](https://github.com/lundegaard/redux-tools) – Maintaining large Redux applications with ease.
- [react-union](https://github.com/lundegaard/react-union) – Integrate React apps into various CMSs seamlessly.
- [lundium](https://github.com/lundegaard/lundium) – Beautiful React component library.

## License

All packages are distributed under the MIT license. See the license [here](https://github.com/lundegaard/validarium/blob/master/LICENSE).
# Validations
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
This package contains common validation functions
## API reference
 <a name="module_validations"></a>

# validations
This package contains common validation functions


* [validations](#module_validations)
    * _number_
        * [.hasNoWhiteSpace](#module_validations.hasNoWhiteSpace) ⇒ <code>Object</code>
        * [.isInteger](#module_validations.isInteger) ⇒ <code>Object</code>
        * [.isNegativeNumber](#module_validations.isNegativeNumber) ⇒ <code>Object</code>
        * [.isPositiveNumber](#module_validations.isPositiveNumber) ⇒ <code>Object</code>
        * [.hasAgeInInterval(minAge, maxAge)](#module_validations.hasAgeInInterval) ⇒ <code>Object</code>
        * [.hasValueInInterval(min, max)](#module_validations.hasValueInInterval) ⇒ <code>Object</code>
        * [.hasValueMax(max)](#module_validations.hasValueMax) ⇒ <code>Object</code>
        * [.hasValueMin(min)](#module_validations.hasValueMin) ⇒ <code>Object</code>
        * [.isDivisibleBy(divisor)](#module_validations.isDivisibleBy) ⇒ <code>Object</code>
    * _other_
        * [.isRequired](#module_validations.isRequired) ⇒ <code>Object</code>
    * _string_
        * [.hasNoSpecialSymbols](#module_validations.hasNoSpecialSymbols) ⇒ <code>Object</code>
        * [.hasOnlyDigits](#module_validations.hasOnlyDigits) ⇒ <code>Object</code>
        * [.isEmail](#module_validations.isEmail) ⇒ <code>Object</code>
        * [.isNumber](#module_validations.isNumber) ⇒ <code>Object</code>
        * [.visPhoneNumber](#module_validations.visPhoneNumber) ⇒ <code>Object</code>
        * [.isString](#module_validations.isString) ⇒ <code>Object</code>
        * [.isTrimmed](#module_validations.isTrimmed) ⇒ <code>Object</code>
        * [.isTrimmedLeft](#module_validations.isTrimmedLeft) ⇒ <code>Object</code>
        * [.isTrimmedRight](#module_validations.isTrimmedRight) ⇒ <code>Object</code>
        * [.isValidIban](#module_validations.isValidIban) ⇒ <code>Object</code>
        * [.matches](#module_validations.matches) ⇒ <code>Object</code>
        * [.hasDateMax(maximalDate)](#module_validations.hasDateMax) ⇒ <code>Object</code>
        * [.hasDateMin(maximalDate)](#module_validations.hasDateMin) ⇒ <code>Object</code>
        * [.hasLength(length)](#module_validations.hasLength) ⇒ <code>Object</code>
        * [.hasLengthInInterval(min, max)](#module_validations.hasLengthInInterval) ⇒ <code>Object</code>
        * [.hasLengthMax(max)](#module_validations.hasLengthMax) ⇒ <code>Object</code>
        * [.hasLengthMin(min)](#module_validations.hasLengthMin) ⇒ <code>Object</code>
        * [.isNumber(list)](#module_validations.isNumber) ⇒ <code>Object</code>
        * [.isOneOf(list)](#module_validations.isOneOf) ⇒ <code>Object</code>
        * [.startsWith()](#module_validations.startsWith) ⇒ <code>Object</code>


* * *

<a name="module_validations.hasNoWhiteSpace"></a>

## validations.hasNoWhiteSpace ⇒ <code>Object</code>
Checks if a string contains no white space.

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  
**Example**  
```js
> hasNoWhiteSpace("")
null

> hasNoWhiteSpace("validarium")
null

> hasNoWhiteSpace("vali darium")
{message Object}
```

* * *

<a name="module_validations.isInteger"></a>

## validations.isInteger ⇒ <code>Object</code>
Checks if the value is an integer

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  
**Example**  
```js
> isInteger(2)
null

> isInteger(2.1)
{message Object}
```

* * *

<a name="module_validations.isNegativeNumber"></a>

## validations.isNegativeNumber ⇒ <code>Object</code>
Checks if the value is a negative number

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  
**Example**  
```js
> isNegativeNumber(-5)
null

> isNegativeNumber(5)
{message Object}

> isNegativeNumber(0)
{message Object}
```

* * *

<a name="module_validations.isPositiveNumber"></a>

## validations.isPositiveNumber ⇒ <code>Object</code>
Checks if the value is a positive number

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  
**Example**  
```js
> isPositiveNumber(5)
null

> isPositiveNumber(-5)
{message Object}

> isPositiveNumber(0)
{message Object}
```

* * *

<a name="module_validations.hasAgeInInterval"></a>

## validations.hasAgeInInterval(minAge, maxAge) ⇒ <code>Object</code>
Checks if the age is in specified interval

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  

| Param | Type | Description |
| --- | --- | --- |
| minAge | <code>number</code> | minimal age |
| maxAge | <code>number</code> | maximal age |

**Example**  
```js
> hasAgeInInterval(1, 3)(2)
null

> hasAgeInInterval(1, 3)(3)
null

> hasAgeInInterval(1, 3)(5)
{message Object}
```

* * *

<a name="module_validations.hasValueInInterval"></a>

## validations.hasValueInInterval(min, max) ⇒ <code>Object</code>
Checks if the value has only digits

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | lower interval endpoint |
| max | <code>number</code> | upper interval endpoint |

**Example**  
```js
> hasValueInInterval(1, 3)(2)
null

> hasValueInInterval(1, 3)(3)
null

> hasValueInInterval(1, 3)(5)
{message Object}
```

* * *

<a name="module_validations.hasValueMax"></a>

## validations.hasValueMax(max) ⇒ <code>Object</code>
Checks if the value is lower or equal to max

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | maximum value |

**Example**  
```js
> hasValueMax(2)(1)
null

> hasValueMax(2)(2)
null

> hasValueMax(2)(3)
{message Object}
```

* * *

<a name="module_validations.hasValueMin"></a>

## validations.hasValueMin(min) ⇒ <code>Object</code>
Checks if the value is higher or equal to min

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | minimum value |

**Example**  
```js
> hasValueMin(2)(3)
null

> hasValueMin(2)(2)
null

> hasValueMin(2)(1)
{message Object}
```

* * *

<a name="module_validations.isDivisibleBy"></a>

## validations.isDivisibleBy(divisor) ⇒ <code>Object</code>
Checks is value is divisible by desired divisor

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  

| Param | Type | Description |
| --- | --- | --- |
| divisor | <code>number</code> | divisor |

**Example**  
```js
> isDivisibleBy(5)(10)
null

> isDivisibleBy(6)(10)
{message Object}
```

* * *

<a name="module_validations.isRequired"></a>

## validations.isRequired ⇒ <code>Object</code>
Checks if the value is present

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: other  
**Example**  
```js
> isRequired('abc')
null

> isRequired(null)
{message Object}
```

* * *

<a name="module_validations.hasNoSpecialSymbols"></a>

## validations.hasNoSpecialSymbols ⇒ <code>Object</code>
Checks if the value doesn't contain any special symbol

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> hasNoSpecialSymbols('abc')
null

> hasNoSpecialSymbols('a%b')
{message Object}
```

* * *

<a name="module_validations.hasOnlyDigits"></a>

## validations.hasOnlyDigits ⇒ <code>Object</code>
Checks if the value has only digits

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> hasOnlyDigits('123')
null

> hasOnlyDigits('12n3')
{message Object}
```

* * *

<a name="module_validations.isEmail"></a>

## validations.isEmail ⇒ <code>Object</code>
Checks if the value is valid email

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isEmail('email@postemail.em')
null

> isEmail('emailpostemail')
{message Object}
```

* * *

<a name="module_validations.isNumber"></a>

## validations.isNumber ⇒ <code>Object</code>
Checks if the value is a number

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isNumber('3')
null

> isNumber('abc')
{message Object}
```

* * *

<a name="module_validations.visPhoneNumber"></a>

## validations.visPhoneNumber ⇒ <code>Object</code>
Checks if the value is a valid phone number

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isPhoneNumber('980123456')
null

> isPhoneNumber('23')
{message Object}
```

* * *

<a name="module_validations.isString"></a>

## validations.isString ⇒ <code>Object</code>
Checks if value is type of string

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isString('abc')
null

> isString('')
null

> isString(123)
{message Object}
```

* * *

<a name="module_validations.isTrimmed"></a>

## validations.isTrimmed ⇒ <code>Object</code>
Checkes if the string do not starts or ends with whitespaces.

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isTrimmed('valid value')
null

> isTrimmed(' invalid value')
{message Object}

> isTrimmed('invalid value ')
{message Object}

> isTrimmed(' invalid value ')
{message Object}
```

* * *

<a name="module_validations.isTrimmedLeft"></a>

## validations.isTrimmedLeft ⇒ <code>Object</code>
Checkes if the string do not starts with whitespaces.

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isTrimmedLeft('valid value')
null

> isTrimmedLeft(' invalid value')
{message Object}
```

* * *

<a name="module_validations.isTrimmedRight"></a>

## validations.isTrimmedRight ⇒ <code>Object</code>
Checkes if the string do not ends with whitespaces.

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isTrimmedRight('valid value')
null

> isTrimmedRight('invalid value  ')
{message Object}
```

* * *

<a name="module_validations.isValidIban"></a>

## validations.isValidIban ⇒ <code>Object</code>
Checks if the value is a valid IBAN

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> isValidIban('CH4217423156868474686')
null

> isValidIban('CZ123')
{message Object}
```

* * *

<a name="module_validations.matches"></a>

## validations.matches ⇒ <code>Object</code>
Checks if value matches the given predicate

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Type | Description |
| --- | --- |
| <code>string</code> | predicate |

**Example**  
```js
> matches('/([a-z]a)/g')('banana')
null

> matches('/([a-z]a)/g')('blueberry')
{message Object}
```

* * *

<a name="module_validations.hasDateMax"></a>

## validations.hasDateMax(maximalDate) ⇒ <code>Object</code>
Checks if the the date is maximally the specified value

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| maximalDate | <code>string</code> | maximum date |

**Example**  
```js
> hasDateMax('2032-07-01')('2020-07-01')
null

> hasDateMax('2032-07-01')('2032-07-01')
null

> hasDateMax('2032-07-01')('2032-07-02')
{message Object}
```

* * *

<a name="module_validations.hasDateMin"></a>

## validations.hasDateMin(maximalDate) ⇒ <code>Object</code>
Checks if the the date is minimally the specified value

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| maximalDate | <code>string</code> | minimal date |

**Example**  
```js
> hasDateMin('2032-07-01')('2040-07-01')
null

> hasDateMin('2032-07-01')('2032-07-01')
null

> hasDateMin('2032-07-02')('2032-07-01')
{message Object}
```

* * *

<a name="module_validations.hasLength"></a>

## validations.hasLength(length) ⇒ <code>Object</code>
Checks if the value has exact length

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | desired length for value |

**Example**  
```js
> hasLength(6)('abcdef')
null

> hasLength(6)('abc')
{message Object}
```

* * *

<a name="module_validations.hasLengthInInterval"></a>

## validations.hasLengthInInterval(min, max) ⇒ <code>Object</code>
Checks if the value has length in interval

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | lower interval endpoint |
| max | <code>number</code> | upper interval endpoint |

**Example**  
```js
> hasLengthInInterval(2, 6)('abcd')
null

> hasLengthInInterval(2, 6)('abcdef')
null

> hasLengthInInterval(2, 6)('a')
{message Object}
```

* * *

<a name="module_validations.hasLengthMax"></a>

## validations.hasLengthMax(max) ⇒ <code>Object</code>
Checks if the values length is lower or equal to max

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | maximum value |

**Example**  
```js
> hasLengthMax(2)('a')
null

> hasLengthMax(2)('ab')
null

> hasLengthMax(2)('abc')
{message Object}
```

* * *

<a name="module_validations.hasLengthMin"></a>

## validations.hasLengthMin(min) ⇒ <code>Object</code>
Checks if the values length is higher or equal to min

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | minimum value |

**Example**  
```js
> hasLengthMin(2)('abc')
null

> hasLengthMin(2)('ab')
null

> hasLengthMin(2)('a')
{message Object}
```

* * *

<a name="module_validations.isNumber"></a>

## validations.isNumber(list) ⇒ <code>Object</code>
Checks if the value doesn't equal any list item

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>array</code> | array of values |

**Example**  
```js
> isNotOneOf(['apple', 'pineapple', 'banana'])('banana')
null

> isNotOneOf(['apple', 'pineapple', 'banana'])('blueberry')
{message Object}
```

* * *

<a name="module_validations.isOneOf"></a>

## validations.isOneOf(list) ⇒ <code>Object</code>
Checks if the value equals any list item

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>array</code> | array of values |

**Example**  
```js
> isOneOf(['apple', 'pineapple', 'banana'])('banana')
null

> isOneOf(['apple', 'pineapple', 'banana'])('blueberry')
{message Object}
```

* * *

<a name="module_validations.startsWith"></a>

## validations.startsWith() ⇒ <code>Object</code>
Checks if the value starts with specific string

**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: string  
**Example**  
```js
> startsWith('dog')('dogo')
null

> startsWith('dog')('cato')
{message Object}
```

* * *




## Related projects

- [@redux-tools](https://github.com/lundegaard/redux-tools) – Maintaining large Redux applications with ease.
- [react-union](https://github.com/lundegaard/react-union) – Integrate React apps into various CMSs seamlessly.
- [lundium](https://github.com/lundegaard/lundium) – Beautiful React component library.

## License

All packages are distributed under the MIT license. See the license [here](https://github.com/lundegaard/validarium/blob/master/LICENSE).
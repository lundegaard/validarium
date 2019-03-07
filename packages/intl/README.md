# Intl
This package contains all validation functions for Intl

## API reference
 <a name="module_intlValidations"></a>

## intlValidations

* [intlValidations](#module_intlValidations)
    * _number_
        * [.isInteger](#module_intlValidations.isInteger) ⇒ <code>Object</code>
        * [.isNegativeNumber](#module_intlValidations.isNegativeNumber) ⇒ <code>Object</code>
        * [.isPositiveNumber](#module_intlValidations.isPositiveNumber) ⇒ <code>Object</code>
        * [.hasAgeInInterval(minAge, maxAge)](#module_intlValidations.hasAgeInInterval) ⇒ <code>Object</code>
        * [.hasValueInInterval(min, max)](#module_intlValidations.hasValueInInterval) ⇒ <code>Object</code>
        * [.hasValueMax(max)](#module_intlValidations.hasValueMax) ⇒ <code>Object</code>
        * [.hasValueMin(min)](#module_intlValidations.hasValueMin) ⇒ <code>Object</code>
        * [.isDivisibleBy(divisor)](#module_intlValidations.isDivisibleBy) ⇒ <code>Object</code>
    * _other_
        * [.isRequired](#module_intlValidations.isRequired) ⇒ <code>Object</code>
    * _string_
        * [.hasNoSpecialSymbols](#module_intlValidations.hasNoSpecialSymbols) ⇒ <code>Object</code>
        * [.hasOnlyDigits](#module_intlValidations.hasOnlyDigits) ⇒ <code>Object</code>
        * [.isEmail](#module_intlValidations.isEmail) ⇒ <code>Object</code>
        * [.isNumber](#module_intlValidations.isNumber) ⇒ <code>Object</code>
        * [.visPhoneNumber](#module_intlValidations.visPhoneNumber) ⇒ <code>Object</code>
        * [.isString](#module_intlValidations.isString) ⇒ <code>Object</code>
        * [.isValidIban](#module_intlValidations.isValidIban) ⇒ <code>Object</code>
        * [.matches](#module_intlValidations.matches) ⇒ <code>Object</code>
        * [.hasDateMax(maximalDate)](#module_intlValidations.hasDateMax) ⇒ <code>Object</code>
        * [.hasDateMin(maximalDate)](#module_intlValidations.hasDateMin) ⇒ <code>Object</code>
        * [.hasLength(length)](#module_intlValidations.hasLength) ⇒ <code>Object</code>
        * [.hasLengthInInterval(min, max)](#module_intlValidations.hasLengthInInterval) ⇒ <code>Object</code>
        * [.hasLengthMax(max)](#module_intlValidations.hasLengthMax) ⇒ <code>Object</code>
        * [.hasLengthMin(min)](#module_intlValidations.hasLengthMin) ⇒ <code>Object</code>
        * [.isNumber(list)](#module_intlValidations.isNumber) ⇒ <code>Object</code>
        * [.isOneOf(list)](#module_intlValidations.isOneOf) ⇒ <code>Object</code>
        * [.startsWith()](#module_intlValidations.startsWith) ⇒ <code>Object</code>


* * *

<a name="module_intlValidations.isInteger"></a>

### intlValidations.isInteger ⇒ <code>Object</code>
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

<a name="module_intlValidations.isNegativeNumber"></a>

### intlValidations.isNegativeNumber ⇒ <code>Object</code>
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

<a name="module_intlValidations.isPositiveNumber"></a>

### intlValidations.isPositiveNumber ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasAgeInInterval"></a>

### intlValidations.hasAgeInInterval(minAge, maxAge) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasValueInInterval"></a>

### intlValidations.hasValueInInterval(min, max) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasValueMax"></a>

### intlValidations.hasValueMax(max) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasValueMin"></a>

### intlValidations.hasValueMin(min) ⇒ <code>Object</code>
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

<a name="module_intlValidations.isDivisibleBy"></a>

### intlValidations.isDivisibleBy(divisor) ⇒ <code>Object</code>
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

<a name="module_intlValidations.isRequired"></a>

### intlValidations.isRequired ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasNoSpecialSymbols"></a>

### intlValidations.hasNoSpecialSymbols ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasOnlyDigits"></a>

### intlValidations.hasOnlyDigits ⇒ <code>Object</code>
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

<a name="module_intlValidations.isEmail"></a>

### intlValidations.isEmail ⇒ <code>Object</code>
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

<a name="module_intlValidations.isNumber"></a>

### intlValidations.isNumber ⇒ <code>Object</code>
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

<a name="module_intlValidations.visPhoneNumber"></a>

### intlValidations.visPhoneNumber ⇒ <code>Object</code>
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

<a name="module_intlValidations.isString"></a>

### intlValidations.isString ⇒ <code>Object</code>
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

<a name="module_intlValidations.isValidIban"></a>

### intlValidations.isValidIban ⇒ <code>Object</code>
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

<a name="module_intlValidations.matches"></a>

### intlValidations.matches ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasDateMax"></a>

### intlValidations.hasDateMax(maximalDate) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasDateMin"></a>

### intlValidations.hasDateMin(maximalDate) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasLength"></a>

### intlValidations.hasLength(length) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasLengthInInterval"></a>

### intlValidations.hasLengthInInterval(min, max) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasLengthMax"></a>

### intlValidations.hasLengthMax(max) ⇒ <code>Object</code>
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

<a name="module_intlValidations.hasLengthMin"></a>

### intlValidations.hasLengthMin(min) ⇒ <code>Object</code>
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

<a name="module_intlValidations.isNumber"></a>

### intlValidations.isNumber(list) ⇒ <code>Object</code>
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

<a name="module_intlValidations.isOneOf"></a>

### intlValidations.isOneOf(list) ⇒ <code>Object</code>
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

<a name="module_intlValidations.startsWith"></a>

### intlValidations.startsWith() ⇒ <code>Object</code>
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


[back to main page](../../README.md)

© 2018-2019 Lundegaard a.s.
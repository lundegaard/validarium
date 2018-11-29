# Intl

This package contains all validation functions for Intl

## API reference 
 <a name="module_intlValidations"></a>

## intlValidations

* [intlValidations](#module_intlValidations)
    * _number_
        * [.isInteger](#module_intlValidations.isInteger) ⇒ <code>Object</code>
        * [.isPositiveNumber](#module_intlValidations.isPositiveNumber) ⇒ <code>Object</code>
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
        * [.isValidIban](#module_intlValidations.isValidIban) ⇒ <code>Object</code>
        * [.hasLength(length)](#module_intlValidations.hasLength) ⇒ <code>Object</code>
        * [.hasLengthInInterval(min, max)](#module_intlValidations.hasLengthInInterval) ⇒ <code>Object</code>
        * [.hasLengthMax(max)](#module_intlValidations.hasLengthMax) ⇒ <code>Object</code>
        * [.hasLengthMin(min)](#module_intlValidations.hasLengthMin) ⇒ <code>Object</code>
        * [.startsWith()](#module_intlValidations.startsWith) ⇒ <code>Object</code>


* * *

<a name="module_intlValidations.isInteger"></a>

### intlValidations.isInteger ⇒ <code>Object</code>
Checks if the value is an integer

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

<a name="module_intlValidations.isPositiveNumber"></a>

### intlValidations.isPositiveNumber ⇒ <code>Object</code>
Checks if the value is a positive number

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
**Returns**: <code>Object</code> - {message Object} when predicate fails or null when pass  
**Category**: number  
**Example**  
```js
> isPositiveNumber(5)
null

> isPhoneNumber(-5)
{message Object}

> isPositiveNumber(0)
{message Object}
```

* * *

<a name="module_intlValidations.hasValueInInterval"></a>

### intlValidations.hasValueInInterval(min, max) ⇒ <code>Object</code>
Checks if the value has only digits

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

<a name="module_intlValidations.isValidIban"></a>

### intlValidations.isValidIban ⇒ <code>Object</code>
Checks if the value is a valid IBAN

**Kind**: static property of [<code>intlValidations</code>](#module_intlValidations)  
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

<a name="module_intlValidations.hasLength"></a>

### intlValidations.hasLength(length) ⇒ <code>Object</code>
Checks if the value has exact length

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

<a name="module_intlValidations.startsWith"></a>

### intlValidations.startsWith() ⇒ <code>Object</code>
Checks if the value starts with specific string

**Kind**: static method of [<code>intlValidations</code>](#module_intlValidations)  
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

© 2018 Lundegaard a.s.

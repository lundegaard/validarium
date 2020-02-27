<a name="module_core"></a>

# core
This package contains all core functionalities for Validarium.


* * *

<a name="module_core.validate"></a>

## core.validate
Applies validations in `descriptor` for `value`.
Params are curried.

**Sig**: Object -> a -> b  

| Param | Type | Description |
| --- | --- | --- |
| descriptor | <code>object</code> | Object that contains validations for each item in `values` |
| value | <code>any</code> | Value for validation |

**Example**  
```js
validate({
	id: [(x) => !x && 'Is required.', (x) => x < 0 && 'Must be greater than 0.'],
	name: [(x) => !x && 'Is required.'],
	surname: [(x) => !x && 'Is required.'],
}, {
		id: -1,
		surname: 'Doe',
	}
])
// Output:
// 	{
// 		id: 'Must be greater than 0.',
// 		name: 'Is required.',
// 		surname: false,
// 	}
```

* * *

<a name="module_core.validateMany"></a>

## core.validateMany
Applies validations in `descriptor` for each item in `values`.
Params are curried.

**Sig**: Object -> [Object] -> [Object]  

| Param | Type | Description |
| --- | --- | --- |
| descriptor | <code>object</code> | Object that contains validations for each item in `values` |
| values | <code>array</code> | Values for validations |

**Example**  
```js
validateMany({
	id: [(x) => !x && 'Is required.', (x) => x < 0 && 'Must be greater than 0.'],
	name: [(x) => !x && 'Is required.'],
	surname: [(x) => !x && 'Is required.'],
}, [
	{
		id: -1,
		surname: 'Doe',
	},
	{
		id: 13,
		name: 'Bob',
	},
])
// Output:
// [
// 	{
// 		id: 'Must be greater than 0.',
// 		name: 'Is required.',
// 		surname: false,
// 	}, {
// 		id: false,
// 		name: false,
// 		surname: 'Is required.',
// 	},
// ]
```

* * *

<a name="module_core.combineValidate"></a>

## core.combineValidate(...fns, values) ⇒ <code>Object</code>
Combine multiple validate schemes into one. If multiple schemes contains same validation, then the error validation * always wins.

**Returns**: <code>Object</code> - Merged result result.  

| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Validation functions. |
| values | <code>any</code> |  |


* * *

<a name="module_core.createValidation"></a>

## core.createValidation(fn, react, params) ⇒ <code>Object</code> \| <code>null</code>
Creates validation function with predicate and message.
Results of validation is ready for translation by react-intl.
Result is valid if nil or empty is passed. Use required validation if you want to ensure that field is required.

**Returns**: <code>Object</code> \| <code>null</code> - Message object when fails { message, messageValues } or null if pass  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | validation predicate. |
| react | <code>String</code> | intl message (eg. { id: 1, defaultMessage: '' }) |
| params | <code>Object</code> | for intl message (eg. { min: 1, max: 2 }) |

**Example**  
```js
> const hasLength = length => createValidation(hasLength(length), m.hasLength, { length })
	> hasLength(6)('abcdef')
	  null
```

* * *
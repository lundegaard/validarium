# Core
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
This package contains all core functionalities for Validarium.
## API reference
 <a name="module_core"></a>

# core
This package contains all core functionalities for Validarium.


* [core](#module_core)
    * [.validate](#module_core.validate)
    * [.validateMany](#module_core.validateMany)
    * [.combineValidate(...fns, values)](#module_core.combineValidate) ⇒ <code>Object</code>
    * [.createValidation(fn, react, params)](#module_core.createValidation) ⇒ <code>Object</code> \| <code>null</code>


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




## Related projects

- [@redux-tools](https://github.com/lundegaard/redux-tools) – Maintaining large Redux applications with ease.
- [react-union](https://github.com/lundegaard/react-union) – Integrate React apps into various CMSs seamlessly.
- [lundium](https://github.com/lundegaard/lundium) – Beautiful React component library.

## License

All packages are distributed under the MIT license. See the license [here](https://github.com/lundegaard/validarium/blob/master/LICENSE).
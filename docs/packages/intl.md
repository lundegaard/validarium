<a name="module_intl"></a>

# intl
This package provides translator for react-inl messages. Also convenient API for validations.


* * *

<a name="module_intl.validateTranslated"></a>

## intl.validateTranslated ⇒ <code>Object</code>
Composed validate with translate. Gives you translated result directly.
Params are curried

**Returns**: <code>Object</code> - Translated result.  
**Sig**: Object -> Object -> Object -> Object  

| Param | Type |
| --- | --- |
| intl | <code>Object</code> | 
| scheme | <code>Object</code> | 
| values | <code>Object</code> | 


* * *

<a name="module_intl.validateTranslated"></a>

## intl.validateTranslated(intl, ...fns, values) ⇒ <code>Object</code>
combine combineValidate with translate result.

**Returns**: <code>Object</code> - Translated result.  
**Sig**: (Object, ...Functions) -> Object -> Object  

| Param | Type | Description |
| --- | --- | --- |
| intl | <code>Object</code> |  |
| ...fns | <code>function</code> | Validation functions. |
| values | <code>Object</code> |  |


* * *

<a name="module_intl.translateResult"></a>

## intl.translateResult(intl, result) ⇒ <code>Object</code>
Translate result of validations with `react-intl`.
We assume that `intl` object is from `react-intl` (usually obtained by `injectIntl`).

**Returns**: <code>Object</code> - Translated result.  

| Param | Type | Description |
| --- | --- | --- |
| intl | <code>Object</code> |  |
| result | <code>Object</code> | to translate |


* * *
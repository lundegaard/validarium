# Examples

## redux-form

```js
reduxForm({
	form: 'exampleForm',
	validate: fieldValidations,
});
```

## Predicates with redux-form fields

```jsx
import { isEmail, hasLengthMax, isRequired } from '@validarium/predicates';
...
<Field
  name="username" type="text"
  component={renderField} label="Username"
  validate={[ isRequired, hasLengthMax(15) ]}
/>
```

## formik

```jsx
<Formik validate={fieldValidations} />
```

# Quick Start

Here's a quick way to get started with Redux Form and React Intl. The same approach can be used for pretty much any form and i18n library of choice.

```js
import React from 'react';
import { useIntl } from 'react-intl';

import { TextInputPresenter, NumberInputPresenter } from '../formPresenters';

// Write a custom wrapper for your form components.
const withValidariumError = Component => ({ error, ...otherProps }) => {
	const intl = useIntl();

	if (!error) {
		return <Component {...otherProps} />;
	}

	return <Component {...otherProps} error={intl.formatMessage(error)} />;
};

export const TextInput = withValidariumError(TextInputPresenter);
export const NumberInput = withValidariumError(NumberInputPresenter);
```

```js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate, isRequired, isEmail, hasLengthMax, isNumber, hasValueMin } from 'validarium';

import { TextInput, NumberInput } from '../formFields';

// Define your validations.
const validateUserForm = validate({
	email: [isRequired, isEmail, hasLengthMax(200)],
	age: [isRequired, isNumber, hasValueMin(18)],
});

// Create your form presenter.
const UserFormPresenter = () => (
	<form>
		<Field component={TextInput} name="email" />
		<Field component={NumberInput} name="age" />
	</form>
);

// Hook the presenter to Redux Form.
const UserForm = reduxForm({
	form: 'user',
	validate: validateUserForm,
})(UserFormPresenter);
```

Here's how the underlying Redux state might look after user interaction.

```json
{
	"form": {
		"user": {
			"values": {
				"age": 20,
				"email": ""
			},
			"errors": {
				"age": null,
				"email": {
					"id": "validarium.isRequired",
					"defaultMessage": "This field is required"
				}
			}
		}
	}
}
```

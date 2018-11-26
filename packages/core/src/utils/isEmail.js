import { isNilOrEmptyString } from 'ramda-extension';

export default email => {
	// eslint-disable-next-line max-len
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return isNilOrEmptyString(email) || (re.test(email) && email.length <= 200);
};

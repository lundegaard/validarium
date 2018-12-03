import { o } from 'ramda';
import { between } from 'ramda-extension';

const getAge = dateString => {
	const today = Date.now();
	const birthDate = new Date(dateString);
	const age = today.getFullYear() - birthDate.getFullYear();
	const monthDifference = today.getMonth() - birthDate.getMonth();
	if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
		return age - 1;
	}
	return age;
};

export default (minAge, maxAge) => o(between(minAge, maxAge), getAge);

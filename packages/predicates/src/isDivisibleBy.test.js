import isDivisibleBy from './isDivisibleBy';

const isDivisibleBy5 = isDivisibleBy(5);

describe('isDivisibleBy', () => {
	it('should be truthy when divisible', () => {
		expect(isDivisibleBy5(40)).toBeTruthy();
	});
	it('should be falsy when not divisible', () => {
		expect(isDivisibleBy5(41)).toBeFalsy();
	});
});

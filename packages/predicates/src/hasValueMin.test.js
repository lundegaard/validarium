import hasValueMin from './hasValueMin';

const hasValueMin10 = hasValueMin(10);

describe('hasValueMin', () => {
	it('should be truthy when below max', () => {
		expect(hasValueMin10(13)).toBeTruthy();
	});
	it('should be truthy when min', () => {
		expect(hasValueMin10(10)).toBeTruthy();
	});
	it('should be falsy when below min', () => {
		expect(hasValueMin10(5)).toBeFalsy();
	});
});

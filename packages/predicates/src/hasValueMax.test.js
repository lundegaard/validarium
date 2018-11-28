import hasValueMax from './hasValueMax';

const hasValueMax10 = hasValueMax(10);

describe('hasValueMax', () => {
	it('should be truthy when below max', () => {
		expect(hasValueMax10(3)).toBeTruthy();
	});
	it('should be truthy when max', () => {
		expect(hasValueMax10(10)).toBeTruthy();
	});
	it('should be falsy when above max', () => {
		expect(hasValueMax10(13)).toBeFalsy();
	});
});

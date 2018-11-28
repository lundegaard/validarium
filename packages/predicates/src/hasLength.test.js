import hasLength from './hasLength';

const hasLength10 = hasLength(10);

describe('hasLength', () => {
	it('should be true when length is exact', () => {
		expect(hasLength10('abcdefghij')).toBeTruthy();
	});
	it('should be falsy when shorter', () => {
		expect(hasLength10('abcd')).toBeFalsy();
	});
	it('should be falsy when longer', () => {
		expect(hasLength10('abcdefghijklmn')).toBeFalsy();
	});
});

/* global test, require, expect*/
const sub = require('./sub');
test('three minus two is one', () => {
    expect(sub(3, 2)).toBe(1);
});
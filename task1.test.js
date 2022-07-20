const stringLength = require('./task1.js');

test('length > 1', () => {
  expect(stringLength('Daniel')).toBe(6);
});

test('length > 1', () => {
  expect(stringLength('Aneal')).toBe(5);
});
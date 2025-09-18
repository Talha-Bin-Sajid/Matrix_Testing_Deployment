const { add, multiply, greet } = require('../src/index');

describe('Math functions', () => {
  test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('should multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(0, 5)).toBe(0);
  });
});

describe('String functions', () => {
  test('should greet properly', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});

describe('Basic tests', () => {
  test('Jest is working', () => {
    expect(true).toBe(true);
  });
});
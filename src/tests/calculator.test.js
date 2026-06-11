const { add, sub, mul, div, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator functions', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
    expect(calculate('+', 2, 3)).toBe(5);
    expect(calculate('add', 2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
    expect(calculate('-', 10, 4)).toBe(6);
    expect(calculate('sub', 10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
    expect(calculate('*', 45, 2)).toBe(90);
    expect(calculate('mul', 45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
    expect(calculate('/', 20, 5)).toBe(4);
    expect(calculate('div', 20, 5)).toBe(4);
  });

  test('division by zero throws error', () => {
    expect(() => div(1, 0)).toThrow('Division by zero');
    expect(() => calculate('/', 1, 0)).toThrow();
  });

  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
    expect(calculate('%', 5, 2)).toBe(1);
    expect(calculate('mod', 5, 2)).toBe(1);
  });

  test('modulo by zero throws error', () => {
    expect(() => modulo(1, 0)).toThrow('Division by zero');
    expect(() => calculate('%', 1, 0)).toThrow();
  });

  test('power: 2 ^ 8 = 256 and fractional/negative exponents', () => {
    expect(power(2, 8)).toBe(256);
    expect(calculate('^', 2, 8)).toBe(256);
    expect(calculate('pow', 2, 8)).toBe(256);
    expect(power(4, 0.5)).toBe(2);
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot: sqrt(16) = 4 and error on negative', () => {
    expect(squareRoot(16)).toBe(4);
    expect(calculate('sqrt', 16)).toBe(4);
    expect(() => squareRoot(-1)).toThrow('Square root of negative number');
    expect(() => calculate('sqrt', -1)).toThrow();
  });

  test('unsupported operation throws', () => {
    expect(() => calculate('unknown', 1, 2)).toThrow(/Unsupported operation/);
  });
});

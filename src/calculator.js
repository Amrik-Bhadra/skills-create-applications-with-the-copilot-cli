// Calculator module
// Supported operations: addition (add, +), subtraction (sub, -), multiplication (mul, *), division (div, /), modulo (mod, %), exponentiation (pow, ^), square root (sqrt)

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

function calculate(op, a, b) {
  switch (op) {
    case 'add':
    case '+':
      return add(a, b);
    case 'sub':
    case '-':
      return sub(a, b);
    case 'mul':
    case '*':
    case 'x':
    case '×':
      return mul(a, b);
    case 'div':
    case '/':
      return div(a, b);
    case 'mod':
    case '%':
      return modulo(a, b);
    case 'pow':
    case '^':
      return power(a, b);
    case 'sqrt':
    case '√':
      return squareRoot(a);
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot, calculate };
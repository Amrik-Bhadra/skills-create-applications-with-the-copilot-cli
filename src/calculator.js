// Calculator module
// Supported operations: addition (add, +), subtraction (sub, -), multiplication (mul, *), division (div, /)

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
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

module.exports = { add, sub, mul, div, calculate };
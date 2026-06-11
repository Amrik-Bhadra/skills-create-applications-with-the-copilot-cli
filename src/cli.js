#!/usr/bin/env node

/*
 Node.js CLI calculator
 Supports operations (as requested in issue):
 - add  : addition
 - sub  : subtraction
 - mul  : multiplication
 - div  : division

 Usage examples:
   node src/cli.js add 2 3    # prints 5
   node src/cli.js 2 + 3      # also supported
   echo "add 2 3" | node src/cli.js
*/

const { calculate } = require('./calculator');

function printUsage() {
  console.error('Usage: node src/cli.js <op> <a> <b>');
  console.error('  op: add | sub | mul | div  (or + - * /)');
  process.exit(1);
}

function parseAndCompute(args) {
  if (args.length === 0) {
    printUsage();
  }

  // Support two forms:
  // 1) node cli.js add 2 3
  // 2) node cli.js 2 + 3
  if (args.length === 3 && ['add','sub','mul','div','+','-','*','/','x','×'].includes(args[0])) {
    const op = args[0];
    const a = Number(args[1]);
    const b = Number(args[2]);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      console.error('Invalid number input');
      process.exit(1);
    }
    try {
      const res = calculate(op, a, b);
      console.log(res);
      process.exit(0);
    } catch (err) {
      console.error(err.message);
      if (err.message.includes('Division by zero')) process.exit(2);
      process.exit(1);
    }
  }

  if (args.length === 3 && !isNaN(Number(args[0])) && ['+','-','*','/','x','×'].includes(args[1])) {
    const a = Number(args[0]);
    const op = args[1];
    const b = Number(args[2]);
    if (Number.isNaN(b)) { console.error('Invalid number input'); process.exit(1); }
    try {
      const res = calculate(op, a, b);
      console.log(res);
      process.exit(0);
    } catch (err) {
      console.error(err.message);
      if (err.message.includes('Division by zero')) process.exit(2);
      process.exit(1);
    }
  }

  printUsage();
}

// If there are command-line args after the script path, use them.
const argv = process.argv.slice(2);
if (argv.length > 0) {
  parseAndCompute(argv);
} else {
  // Read from stdin
  let data = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => data += chunk);
  process.stdin.on('end', () => {
    data = data.trim();
    if (!data) printUsage();
    const parts = data.split(/\s+/);
    parseAndCompute(parts);
  });
}

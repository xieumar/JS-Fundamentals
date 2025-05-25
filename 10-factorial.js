const args = process.argv.slice(2);
const n = Number(args[0]);

function factorial(x) {
  if (isNaN(x)) {
    return 1;
  }

  if (x === 0 || x === 1) {
    return 1;
  }

  return x * factorial(x - 1);
}

console.log(factorial(n));

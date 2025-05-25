const args = process.argv.slice(2);
const a = Number(args[0]);
const b = Number(args[1]);

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('Missing number');
  } else {
    console.log(a + b);
  }
}

add(a, b);
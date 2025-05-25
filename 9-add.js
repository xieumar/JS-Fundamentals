const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('no argument');
} else if (args.length === 1) {
  console.log('argument: ' + args[0]);
} else {
  const a = Number(args[0]);
  const b = Number(args[1]);

  if (isNaN(a) || isNaN(b)) {
    console.log('Missing number');
  } else {
    console.log(a + b);
  }
}

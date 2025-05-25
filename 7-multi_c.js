const args = process.argv.slice(2);
const c = 'C is fun';

if (!isNaN(Number(args[0]))) {
 
    for (let i = 0; i < Number(args[0]); i++) {
        console.log(c);
    }
}
else {
 console.log( 'Not a number' );
}
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
//https://www.npmjs.com/package/yargs

console.log('Printing argv object: ');
console.log(argv, '\n');
// console.log(argv._[0])
// console.log(argv.i2);

let i2 = argv.i2;
let d2 = argv.d2;
let s2 = argv.s2;


console.log('Printing the result: ');
const main = function() {
    var i = 4
    var d = 4.0
    var s = "Hello "
    // Declare second integer, double, and String variables.
    // var i2;
    // var d2;
    // var s2;
    // Read and save an integer, double, and String to your variables.
    //i2 = parseInt(readLine());
    //d2 = parseFloat(readLine());
    //s2 = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + i2);
    // Print the sum of the double variables on a new line.
    console.log((d + d2).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + s2);
}

main();
/* 
run:
cd dir/yourFile.js/
node DataTypes.js main --i2 4 --d2 6 --s2 "Javascript." 
*/


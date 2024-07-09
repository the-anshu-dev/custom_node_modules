const Module = require('module');
const fs = require('fs');
// let code = fs.readFileSync('.sample.js', 'utf-8');

const readline  = require('readline');


const I1 = readline.createInterface({
    input:process.stdin,
    out:process.stdout

});

I1.question('Enter the filename:', function(filename){
  
let code = fs.readFileSync(`./${filename}`, 'utf-8');

// without wrapper module

console.log(' without wrapper module');
console.log(code)
console.log(' without wrapper module');


const wrapper = Module.wrap(code);
const AcutalCode = wrapper.toString();

console.log(' with wrapper module');
console.log(AcutalCode)
console.log(' with wrapper module');

I1.close();
});


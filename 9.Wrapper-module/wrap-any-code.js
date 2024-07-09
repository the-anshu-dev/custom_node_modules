const Module = require('module');
const fs = require('fs');
let code = fs.readFileSync('.sample.js', 'utf-8');

// without wrapper module

console.log(' without wrapper module');
console.log(code)
console.log(' without wrapper module');


const wrapper = Module.wrap(code);
const AcutalCode = wrapper.toString();

console.log(' with wrapper module');
console.log(AcutalCode)
console.log(' with wrapper module');
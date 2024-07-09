const Module = require('module');

let code = 'console.log("hello swashtika")';
const wrapper = Module.wrap(code);
const AcutalCode= wrapper.toString();


console.log(AcutalCode)
const path = require('path');
console.log('Arguments Supplied',process.argv);
console.log('Arguments Count',process.argv.length);

// get the current filename in nodejs using global constant

let filename= path.basename(__filename);
console.log(filename);

// get the current filename in nodejs without global constant

let fileName= path.basename(process.argv[1]);
console.log(fileName);

// To get where node is installed 

let nodePath= process.argv[0];
console.log(nodePath);


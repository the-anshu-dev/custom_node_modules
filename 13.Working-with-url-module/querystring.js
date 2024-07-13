const qs = require('querystring')

const dummyURL =`order=5&type=active`

let parseURL = qs.parse(dummyURL)
console.log('Parse URL ===> ', parseURL);

let order = parseURL.order
let type = parseURL.type


console.log('Parse URL ORDER ===> ', order);
console.log('Parse URL TYPE ===> ', type);

// convert into string 
console.log(qs.stringify(parseURL));

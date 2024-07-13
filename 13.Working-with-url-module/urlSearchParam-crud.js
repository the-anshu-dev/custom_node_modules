const url = require('url');
const {URLSearchParams} = url;

let uri = `https://xyz.com:3000/category/products/1/latest?order=5&type=active#clickEvent`;

let withoutQueryString = url.parse(uri);
let withQueryString = url.parse(uri,true);
console.log(`without Query String = `,withoutQueryString);
console.log(`with Query String = `,withQueryString);

let querystring = url.parse(uri).search;
let query = url.parse(uri,true).query;

console.log('QueryString ',querystring);
console.log('query ',query);

let params2 = new URLSearchParams(querystring.split("?")[1]);
console.log('param2 : ',params2.get('order'));
console.log('param2 ',params2.get('type'));

let params1 = new URLSearchParams(query);
console.log('param 1 : ',params1.get('order'));
console.log('param 1:',params1.get('type'));

console.log('Param 3 :',query.order)
console.log('Param 3 :',query.type);

//Properties and method of URL Search Params
//size to find lenght
console.log('size of params :',params1.size);
console.log('size of query :',Object.keys(query).length);

params1.append('gender','male');
let newQueryString = params1.toString();
console.log('new URL',newQueryString);

console.log('check the key gender :',params1.has('gender'));
console.log('check the key is married :',params1.has('isMarried'));

params1.delete('gender');

console.log('check the key gender :',params1.has('gender'));
console.log('check the key is married :',params1.has('isMarried'));
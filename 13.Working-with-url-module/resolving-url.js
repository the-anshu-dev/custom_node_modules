const url = require('url')

const BASE_URL =`https://www.anshu.com`
const param = '/category/product/1/latest'
const endPoint =`${param}?order=5&type=active#clickEvent`


const urlObj = new url.URL(endPoint,BASE_URL)  // append and correct url


console.log('urlObj==>', url.resolve(BASE_URL, endPoint));
console.log('urlObj==>', url.resolve(endPoint, BASE_URL)); // depricated
console.log('urlObj==>', urlObj.href);

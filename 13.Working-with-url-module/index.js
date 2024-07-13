const url = require('url')

const dummyURL =`https://www.anshu.com:8080/category/product/1/latest?order=5&type=active#clickEvent`
const urlObj = new url.URL(dummyURL)

console.log("URL ==> ", urlObj);

console.log('-------------------------------------');
console.log('');
console.log("protocol ==>",urlObj.protocol);
console.log("hostname ==>",urlObj.hostname);
console.log("port ==>",urlObj.port);
console.log("host ==>",urlObj.host);
console.log("origin ==>",urlObj.origin);
console.log("pathname ==>",urlObj.pathname);
console.log("search ==>",urlObj.search);
console.log("searchParams ==>",urlObj.searchParams);
console.log("hash ==>",urlObj.hash);
console.log("username ==>",urlObj.username);
console.log("password ==>",urlObj.password);
console.log("href ==>",urlObj.href);
console.log('');
console.log('-------------------------------------');
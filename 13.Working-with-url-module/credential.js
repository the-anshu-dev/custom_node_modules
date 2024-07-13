const url = require('url')

const dummyURL =`https://the-anshu-dev:Anshu@123@SeekSolutionllp.in`
const urlObj = new url.URL(dummyURL)

console.log("URL ==> ", urlObj);

console.log('-------------------------------------');
console.log('');

console.log("username ==>",urlObj.username);
console.log("password ==>",urlObj.password);
console.log("href ==>",urlObj.href);
console.log('');
console.log('-------------------------------------');
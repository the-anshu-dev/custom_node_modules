const url = require('url');
//use of url class Object
let uriParam = {
    href: 'https://www.anshu.com:8080/category/product/1/latest?order=5&type=active#clickEvent',
    origin: 'https://www.anshu.com:8080',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.anshu.com:8080',
    hostname: 'www.anshu.com',
    port: '8080',
    pathname: '/category/product/1/latest',
    search: '?order=5&type=active',
    hash: '#clickEvent'
  }

let fullURL =url.format(uriParam);

console.log("Full URL ====> ", fullURL);
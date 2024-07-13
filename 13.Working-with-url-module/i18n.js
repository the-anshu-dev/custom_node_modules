const url = require('url');
//use of url class Object
let uri = `https://ü.com/`;

//Internationalisation = I18n
console.log(`URL to ascii= ${url.domainToASCII(uri)}`); //https://xn--tda.com/
console.log('URL to unicode =',url.domainToUnicode(uri)); //https://ü.com/
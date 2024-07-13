const url = require('url');
//use of url class Object
let uri = `https://ü.com/`;

let urlObject = new url.URL(uri);
console.log(`Url Ascii = ${urlObject.origin}`);

let unicodeURl = uri;
console.log(`Url unicode  = ${unicodeURl.normalize("NFC")}`);    // Normalization Form of Composition
console.log(`Url unicode  = ${unicodeURl.normalize("NFD")}`);    // Normalization Form of Decomposition
console.log(`Url unicode  = ${unicodeURl.normalize("NFKC")}`);   // Normalization Form of Kompactible(compactable) Composition 
console.log(`Url unicode  = ${unicodeURl.normalize("NFKD")}`);   // Normalization Form of Kompactible(compactable) Decomposition

// For NFC && NFKC 
// character + symbol + position
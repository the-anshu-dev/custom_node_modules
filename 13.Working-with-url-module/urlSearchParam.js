const url = require('url')
const {URLSearchParams} = url

const dummyURL =`https://www.anshu.com:8080/category/product/1/latest?order=5&type=active#clickEvent`

let param = new URLSearchParams((new URL(dummyURL)).searchParams)
console.log(param.get('order'));
console.log(param.get('type'));


// iteration 
for (let [key,type] of param){
    console.log(`${key} == ${type}`);
}

let param2 = new URLSearchParams(dummyURL.split('?')[1])
console.log(param2.get('order'));
console.log(param2.get('type'));

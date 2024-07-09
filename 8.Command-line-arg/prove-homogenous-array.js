console.log('Arguments Supplied',process.argv)
let i = 0;
for(;i<process.argv.length;i++){
    if(typeof(process.argv[i]) != "string"){
        break;
    }
}

if(i==process.argv.length){
    console.log('Homegenous Array');
}else{
    console.log('Homegenous Array');
}
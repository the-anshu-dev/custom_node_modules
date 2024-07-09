const log = require('.logger')
const fs = require('.logger')

try {
    const data = fs.readFileSync('./index.js', "utf-8")

    if(data){
        console.log(data)
        log('File Readed Succesfully', 0)
    }
} catch(error){
    log ('error occurred : '+ error.message,2);
}
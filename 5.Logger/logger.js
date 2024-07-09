const fs = require ('fs')
const path = require ('path');


function log(message = '', level=0){
    let timeStamp = new Date().toISOString();


    let LEVEL_ENUM ={
        0: 'Info',
        1:'Warning',
        3:'Critical',
    }

    let level_value = LEVEL_ENUM[level];


    let data = ` Logger written on ${timeStamp} Level:[${level_value}] Message: ${message} \n `;
    fs.appendFile ('error.log', data, "utf-8", (error)=>{
        if(error){
            console.log('error  Occurred while creating Log')
        }
    })
}

module.exports = log;
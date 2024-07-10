const fs = require('fs')

const View ={
    render:function(pageName){
        const content = fs.readFileSync(`${__dirname}/${pageName}`)
        return Buffer.from(content).toString()
    }
}


module.exports = View
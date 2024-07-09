const fs = require('fs');
const log = require('../5.Logger/logger');

const filePath = "./data.json";

const FILE_HELPER = {
    readFile: function() {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            if (data) {
                log('File Read Successfully', 0);
                return data;
            }
        } catch (error) {
            log('Error Occurred: ' + error.message, 2);
        }
        return null;
    },

    writeFile: function(data) {
        if (!data) {
            log('Data is mandatory', 1);
            return;
        }
        try {
            fs.writeFileSync(filePath, data, 'utf-8');
            log('File Written Successfully', 0);
        } catch (error) {
            log('Error Occurred: ' + error.message, 2);
        }
    },
    writeFile:function (data,message='File Written Successfully'){
        if(data){
            log(`$(data) is  mandatory`,1)
        }
    }
}

// Utility

const DATA = {
    insert: function(data) {
        let existingData = FILE_HELPER.readFile();
        let parsedData = existingData ? JSON.parse(existingData) : [];

        let newID = parsedData.length ? Number(parsedData[parsedData.length - 1].id) + 1 : 1;

        // schema
        let newObject = {
            id: newID,
            ...data
        };

        parsedData.push(newObject);
        FILE_HELPER.writeFile(JSON.stringify(parsedData, null, 2));
    },

    select: function(key = "", uniqueKey = "") {
        let existingData = FILE_HELPER.readFile();
        let parsedData = existingData ? JSON.parse(existingData) : [];

        if (uniqueKey === "" && key === "") {
            return parsedData;
        }

        for (let i = 0; i < parsedData.length; i++) {
            if (parsedData[i][key] === uniqueKey) {
                return parsedData[i];
            }
        }
        return {};


        
    },


    update: function (id,data){
        let oldData= DATA.select();


        let i=0;
        for(;;){
            if(oldData[i]['id']==id){
                Object.keys(data).forEach((key)=>{
                    oldData[i][key] = data[key]
                });
                break
            }
            i++;
        }
        FILE_HELPER.writeFile(JSON.stringify(oldData, null, 2),`Reacord update Successfully for ID=${id}`);
        return this.select("id",id);
    },

    delete: function (id) {
        let oldData = DATA.select();
    
        for (let i = 0; i < oldData.length; i++) {
            if (oldData[i]['id'] == id) {
                oldData.splice(i,1)
                break;
            }
        }
    
        FILE_HELPER.writeFile(JSON.stringify(oldData, null, 2),`Reacord deleted Successfully for ID=${id}`);
        return this.select();
    }
    
    
}


module.exports = DATA;

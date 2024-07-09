const readline = require('readline');
const query = require('./helper');

const Interface1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

Interface1.question('Which type of operation do you want to perform? (insert/select/update/delete): ', (option) => {
    let optionValue = option.toLowerCase();

    const Interfaces = {
        insert: () => {
            Interface1.question('Enter Id (or leave blank to auto-generate): ', (id) => {
                Interface1.question('Enter your Name: ', (Name) => {
                    Interface1.question('Enter your Salary: ', (Salary) => {
                        if (id === "") {
                            query.insert({ Name, Salary });
                        } else {
                            query.insert({ id, Name, Salary });
                        }
                        Interface1.close();
                    });
                });
            });
        },
        select: () => {
            Interface1.question('Enter the key Name: ', (keyName) => {
                Interface1.question(`Enter ${keyName} to find the record: `, (value) => {
                    const result = query.select(keyName, value);
                    Interface1.close();
                });
            });
        },
        update: () => {
            Interface1.question('Enter the Id : ', (id) => {
                Interface1.question('Enter the  Name: ', (Name) => {
                   Interface1.question(`Enter the salary:`,(Salary)=>{
                    let data ={
                        id,
                        name:Name,
                        salary:Salary

                    }
                    console.log(query.update(id,data))
                    Interface1.close();
                   })
                });
            });
        },

        delete: ()=>{
            Interface1.question('Enter the Id : ', (id) => {
                console.log(query.delete(id))
                    Interface1.close();
            });
        }
    };

    if (Interfaces[optionValue]) {
        Interfaces[optionValue]();
    } else {
        console.log('Invalid option. Please choose "insert", "select","update", or , "delete".');
        Interface1.close();
    }
});

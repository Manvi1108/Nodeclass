const mongo = require('./config');

const insert = () =>{
    const db = mongo();
    console.log(db);
}
insert();
const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const database = 'testdb';

async function connectdb(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('testdata');
    // let response = await collection.find({active:true}).toArray();
    // console.log(response);
    // console.log(result);                  //datafetching in same function(apporach1)
    return collection;
}
module.exports = connectdb;
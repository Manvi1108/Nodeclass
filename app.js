const mongo = require('mongoose');

const db = async () =>{
    await mongo.connect('mongodb://localhost:27017/testdb')
    const testdataSchema = new mongo.Schema({
        title: String,
    })
    const testdata = mongo.model('testdata', testdataSchema);
    await testdata.insertMany({title : 'hotel1'});
    
}

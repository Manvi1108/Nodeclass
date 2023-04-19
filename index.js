// const http = require('http').createServer();             //single method createserver
// const http = require('http');                                //require all methods
// http.createServer (testServer()).listen(3000);
// console.log('Server running at http://localhost:3000/');
// console.log(__filename);        //to print the current directory path

const { isUtf8 } = require('buffer');
const { get } = require('http');
// const { error } = require('console');
// const filesystem = require('fs');
// filesystem.mkdirSync("files");
// filesystem.writeFileSync('files/test.txt','hello world');
// filesystem.writeFileSync('files/test.txt',' hello world overwritten');
// filesystem.appendFileSync('files/test.txt',' hello world appended');
// data = filesystem.readFileSync('files/test1.txt', 'utf-8');
// console.log(data);
// filesystem.renameSync('files/test.txt','test1');
// filesystem.unlinkSync('test1.txt');
// filesystem.rmdirSync('files');
// console.log(data.toString());
// console.log(filesystem.readFileSync('files/test.txt'));


// filesystem.mkdir('files', (error)=>{
//     console.log('Directory creation successful')
// });

// filesystem.writeFile('files/test.txt','hello world', (error)=>{
//     console.log('File writing successful');
// });

// filesystem.readFile('files/test.txt','utf-8',(error,data)=>{
//     console.log(data);
// });
// console.log('after data')


//OPERATING SYSTEM MODULES
// const os = require('os');
// console.log(os.arch());     //to know os configuration 64/32

// console.log(os.freemem()); //to know os configuration(free memory)
// console.log(`${os.freemem()/1024/1024/1024}`);

// console.log(`${os.totalmem()/1024/1024/1024}`); //to know os configuration(total memory)
// console.log(os.hostname());
// console.log(os.machine());


// async function connectdb(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('testdata');
//     // let response = await collection.find({active:true}).toArray();
//     // console.log(response);
//     // console.log(result);                  //datafetching in same function(apporach1)
//     return collection;
// }



// console.warn(connectdb());     //returns promise    --> to handle promise outside of connectdb --> .then(console.log)
// handle promise within function --> await
// handle promise outside function --> .then

//data fetching outside the function(approach2)

// connectdb().then((res)=>{
//     // console.warn(res.find().toArray());
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })


const mongodb = require('./config');
const main = async() => {
    const connection = await mongodb();
    const data = await connection.find().toArray();
    console.log(data);
}

main();

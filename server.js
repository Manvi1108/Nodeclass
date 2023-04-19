//server and routing

// const http = require('http');
// http.createServer((req, res) => {
//     // console.log(req.url)
//     if(req.url === '/'){
//         res.end('hello from the home page')
//     }
//     else if(req.url === '/about'){
//         res.end('hello from the about page')
//     }
//     else{
//         res.end('page not found')
//     }
//     res.end("hello from the server side");
// }).listen(5000,'127.0.0.1', () => {
//     console.log("hello from the server")
// });

const filesystem = require('fs');
//api creation

// const http = require('http');
// const data = require('./data');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-Type': 'application/json'})      //mandatory to tell type like json    //json.stringify to change data to string in json
//     // res.write(JSON.stringify({name:'manvi', age : 27}));              //default content type is json for api
//     res.write(JSON.stringify(data));
//     // console.log(process);
//     // console.log(process.argv[2]);
// }).listen(5000)
// filesystem.writeFileSync(process.argv[2], process.argv[3]);
// console.log(process.argv[2]);

// const event = require('events');
// const eventEmitter = event.EventEmitter;

const EventEmitter = require('events');
EventEmitter.on('hello', () => {
    console.log('hello');
})
EventEmitter.emit('hello world')

// emit --> calling
// on --> tells the working/declarartion of event
// on before emit(always)

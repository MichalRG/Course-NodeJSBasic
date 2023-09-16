 const http = require('http');
 const express = require('express');

 const app = express(); // it exports function to reun server

 // it will executing evry time request will come, the method expect function as an argument
 // u have to pass function with 3 parameters always
 app.use((req, res, next) => {
    console.log('test');
    next(); // it allows to move to another middleware without it is returining response and finish middlewaring flow
 }); //adding new middleware fucntion 

 app.use((req,res,next)=> {
    console.log('Another middleware!');
    res.send('<h1>Hello from express! </h1>'); // default response haader has type /text/html
 });

 const server = http.createServer(app); // we pass function which is handler to running server  

 server.listen(3000); // keep process running for incoming request
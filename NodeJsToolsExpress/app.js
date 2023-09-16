 const http = require('http');
 const express = require('express');

 const app = express(); // it exports function to reun server

//  // it will executing evry time request will come, the method expect function as an argument
//  // u have to pass function with 3 parameters always
//  app.use((req, res, next) => {
//     console.log('test');
//     next(); // it allows to move to another middleware without it is returining response and finish middlewaring flow
//  }); //adding new middleware fucntion 

app.use('/add-product', (req, res, next) => { // it has to be before the '/' becuase path '/add-product' also match to the bottom one, but because we do not call next it won't be handle
    res.send('<h1>The Add Product Page</h1>');
});

 app.use('/', (req,res,next)=> { //default value for path is '/' (first argument), evrything what starts with slesh will be porcessed through this use call
    console.log('Another middleware!');
    res.send('<h1>Hello from express! </h1>'); // default response haader has type /text/html if return text!
 });

 app.listen(3000); //it creates server and call listen on pointed port (so the same code as previous)

 const http = require('http');
 const express = require('express');

 const app = express(); // it exports function to reun server

 const server = http.createServer(app); // we pass function which is handler to running server

 server.listen(3000); // keep process running for incoming request
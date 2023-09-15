 const http = require('http');

 const routes = require('./routes'); // ./ means it looks in project not globally
 //exported  cannot be modified

 const server = http.createServer(routes.handler); //we point which funciton will run when our server receive request

 server.listen(3000); // keep process running for incoming request
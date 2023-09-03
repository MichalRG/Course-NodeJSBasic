 const http = require('http');
 const fs = require('fs'); //file system

function rqListener(req, res) {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>MFP</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        }); // waiting on data from stream

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); 

            const message = parsedBody.split('=')[1]; // because body contians key name = value, we need only value there is only message=XXX
            
            fs.writeFileSync('message.text', message); // it has to be moved here not after req.on because in another way it could be call to early
            res.statusCode = 302; //redirection
            res.setHeader('Location', '/');
    
            return res.end(); //this returning allows to avoid executing the rest lines
        }); // event which will call when the stream will finish

    }

    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title>MFP</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('/<html>');
    res.end();
}

 const server = http.createServer(rqListener); //we point which funciton will run when our server receive request

 server.listen(3000); // keep process running for incoming request
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write(`<html><body><h1>Hello There!</h1><br><form action="/create-user" method="POST">
        <input type="text" name="username"><button type="submit">Send</button>
        </form></body></html>`);

        return res.end();
    }
    else if (url === '/users') {
        res.write('<html><body><h1>Users:</h1><ul><li>User1</li><li>User2</li></ul></body></html>');
        
        return res.end();
    }
    else if (url === '/create-user' && method === 'POST') {
        const body = [];
        
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();

            const message = parsedBody.split('=')[1];

            console.log(`message: ${message}`);
            
            res.statusCode = 302; //redirection
            res.setHeader('Location', '/');
        
            return res.end(); 
        })
    }
    res.write('<html>');
    res.write('<head><title>ASSIGNMENT</title></head>');
    res.write(`<body><h1>message</h1></body>`);
    res.write('/<html>');
    res.end();
}

module.exports.handler = requestHandler;
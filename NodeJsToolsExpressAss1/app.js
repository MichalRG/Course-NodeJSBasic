const express = require('express');

const app = express();

app.use('/users', (req,res,next) => {
    res.send('<ul><li>Mike</li><li>Leo</li></ul>')
});

app.use('/', (req,res,next) => {
    res.send('<h1>Yo in multiverse!</h1>');
});

app.listen(3000);
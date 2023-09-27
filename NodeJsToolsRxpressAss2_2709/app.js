const express = require('express');
const path = require('path');

const app = express();

const mainRoutes = require('./routes/main');
const usersRoutes = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
app.use(usersRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1> NOT FOUND 💣 </h1>');
});

app.listen(3000);
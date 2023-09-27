const path = require('path');

const express = require('express');
const bodyParaser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParaser.urlencoded({extended: false})); //this makes parsing request for us and then it will call next(), in the previous section we did by ourselfes
app.use(express.static(path.join(__dirname, 'public'))); //it will take any request and tries to find some file in that directory

//order has matter! 
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
});

app.listen(3000);
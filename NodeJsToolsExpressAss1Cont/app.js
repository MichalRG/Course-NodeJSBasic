const express = require('express');
const bodyParaser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParaser.urlencoded({extended: false})); //this makes parsing request for us and then it will call next(), in the previous section we did by ourselfes

//order has matter! 
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res, next) => {
    res.status(404).send('<h1>Page not found</h1>'); // it is possible to adding chain of configuration for handling routes .status is an example it could be also .setHeader...
});

app.listen(3000);
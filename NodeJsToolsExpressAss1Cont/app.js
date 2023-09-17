const express = require('express');
const bodyParaser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParaser.urlencoded({extended: false})); //this makes parsing request for us and then it will call next(), in the previous section we did by ourselfes

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
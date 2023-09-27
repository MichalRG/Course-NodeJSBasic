const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

//registering new template engines not build in express (pug was already builded in )
// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'})); // we have to tell express js that we installed such handlebars template enginge
// to point layout folder we hasve to pass optional argument to expressHbs with configuration
// the default value for arguments are as set above (so we can skip it not like in the exampel above).
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs');
// app.set('view engine', 'pug'); //setting global values which nodejs understand
//view engine is one pre-defined value (same as views)
// app.set('views', 'views'); //vies it's default that why this confiugration value we didnt set earlier 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {docTitle: '404 - Not Found'});
});

app.listen(3000);

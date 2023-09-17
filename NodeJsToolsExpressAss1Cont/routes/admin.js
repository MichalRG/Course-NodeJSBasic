const path = require('path'); //core js module not needs to install

const express = require('express');

const router = express.Router();
 
router.get('/add-product', (req,res,next) => {
    // res.send('<form action="add-product" method="POST"><input type="text" name="title"><button type="submit">OK</button></form>');

    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

//app.use is universal 
router.post('/add-product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/'); //redircting
});

module.exports = router;
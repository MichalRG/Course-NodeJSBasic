const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    //path join will build automaticaly path with /, using __dirname it return absolute path to the current location in your system (shop.js that's why we need after it to go back ../)
    res.sendFile(path.join(__dirname, '../', 'views','shop.html')); 

    // res.send('<h1>Yo in multiverse!</h1>');
});

module.exports = router;
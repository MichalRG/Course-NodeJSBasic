const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;

  // second arguments are data which we pass to render function, we pass it as object with key-value
  res.render('shop', {
    prods: products,
    docTitle: 'Shop',
    path: '/', 
    hasProducts: products.length > 0,
    activeShop:  true,
    productCSS: true
  }); 
  //it will use default template engine and then retrun
  //it will look for in our views file (default value for express), and it will look for .pug ext because
  //we set view enginge as pug
});

module.exports = router;

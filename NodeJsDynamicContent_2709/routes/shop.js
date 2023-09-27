const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop'); //it will use default template engine and then retrun
  //it will look for in our views file (default value for express), and it will look for .pug ext because
  //we set view enginge as pug
});

module.exports = router;

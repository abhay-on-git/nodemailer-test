var express = require('express');
var router = express.Router();

const userCollection = require('../models/userCollection')

const {sendmail} = require('../sendmail')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/welcome', async function(req, res, next) {
  res.send('Email sent to your Regisered Email');
});

router.post('/welcome', async function(req, res, next) {
  
  const {name,email} = req.body
  await userCollection.create(req.body)
  await sendmail(email,name)
  res.send('Email sent to your Regisered Email');
});

module.exports = router;

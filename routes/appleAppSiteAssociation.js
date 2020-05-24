const express = require('express');
const router = express.Router();
const appleJson = require('../public/apple-app-site-association.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'application/pkcs7-mime')
  res.header("Content-Type",'application/json');
  res.json(appleJson);
});

module.exports = router;
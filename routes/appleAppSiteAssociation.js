const express = require('express');
const router = express.Router();
const appleJson = require('../public/apple-app-site-association');

/* GET users listing. */
router.get('/apple-app-site-association', function(req, res, next) {
  res.header("Content-Type",'application/json');
  res.json(appleJson);
});

module.exports = router;
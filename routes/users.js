const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('buy', { title: 'TryWeb - Help page' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // var parmA = req.param('a');
  // var parmB = req.param('b');

  // let a = parmA + parmB;

  res.render('index', { title: 'Express.js' });
});

module.exports = router;

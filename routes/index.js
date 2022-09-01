var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('C:\\Users\\Harsh\\Practice\\Vinayaka_Assessments\\views\\index.html');
});

module.exports = router;

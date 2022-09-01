var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('C:\\Users\\Harsh\\Practice\\Vinayaka_Assessments\\Login_Page\\index.html');
});

router.get('/style.css', function(req, res, next) {
	res.sendFile('C:\\Users\\Harsh\\Practice\\Vinayaka_Assessments\\Login_Page\\style.css');
});

router.get('/index.js', function(req, res, next) {
	res.sendFile('C:\\Users\\Harsh\\Practice\\Vinayaka_Assessments\\Login_Page\\index.js');
});

router.get('/Student', function(req, res, next) {
	res.sendFile('C:\\Users\\Harsh\\Practice\\Vinayaka_Assessments\\views\\index.html');
});


router.post('/', (req, res) => {
	console.log(req.body);
});        

module.exports = router;

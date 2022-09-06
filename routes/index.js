const express = require('express')
const router = express.Router()
var Student = require('C:\\Users\\Harsh\\Practice\\Vinayaka_Assessments\\connections\\connection.js')


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
	const student_user = new Student(req.body);
	student_user.save();
});        

module.exports = router;

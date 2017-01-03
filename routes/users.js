var express = require('express');
var router = express.Router();

/* GET users listing. */


router.route('/add').post(function(req, res, next) {
	
	var response = req.body.var1 + req.body.var2
  	res.json(response);
});


router.route('/add/:number1/:number2').get(function(req,res,next){

		var response = parseInt(req.params.number1) + parseInt(req.params.number2)
		res.json(response);

});

router.route('/substract').post(function(req, res, next) {
	
	var response = req.body.var1 - req.body.var2
  	res.json(response);
});


router.route('/substract/:number1/:number2').get(function(req,res,next){

		var response = parseInt(req.params.number1) - parseInt(req.params.number2)
		res.json(response);

});

router.route('/multiply').post(function(req, res, next) {
	
	var response = req.body.var1 - req.body.var2
  	res.json(response);
});


router.route('/multiply/:number1/:number2').get(function(req,res,next){

		var response = parseInt(req.params.number1) - parseInt(req.params.number2)
		res.json(response);

});


router.route('/divide').post(function(req, res, next) {
	
	var response = req.body.var1 / req.body.var2
  	res.json(response);
});


router.route('/divide/:number1/:number2').get(function(req,res,next){

		var response = parseInt(req.params.number1) / parseInt(req.params.number2)
		res.json(response);

});



module.exports = router;

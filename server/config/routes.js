console.log("IN ROUTES.JS FILE");

var passport = require('passport')

var users = require("../controllers/users.js");
var tips = require("../controllers/tips.js");


module.exports = function(app){
	app.post('/login', passport.authenticate('local', { successRedirect: '/main',
                                   failureRedirect: '/login',
                                   failureFlash: true }
	))

	app.get('/main', function(req, res){
		console.log("REQQQ", req.user)
		res.json(req.user)
		
	})

	app.post('/signup', function(req, res){
		users.signup(req, res)
	})

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/login')
	})


	app.get('/getTips', function(req, res){
		console.log("getting tips sdfasfssdfaf", req.body)
		tips.getTips(req, res)
	})



	app.post('/removeTip', function(req, res){
		console.log("IN ROUTeS REMOE TIP", req)
		tips.removeTip(req, res)
	})


	app.post('/happyPrice', function(req, res){
		console.log("IN ROUTINGS HAPPY PRICE", req.body)
		tips.happyPrice(req, res)
	})

	app.post('/sadPrice', function(req, res){
		console.log("IN ROUTINGS HAPPY PRICE", req.body)
		tips.sadPrice(req, res)
	})

	app.post('/dontCare', function(req, res){
		tips.dontCare(req, res)
	})

}
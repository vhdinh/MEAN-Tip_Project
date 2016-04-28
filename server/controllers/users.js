console.log("IN CONTROLLER USERS.JS FILE")

var mongoose = require("mongoose");

var User = mongoose.model("users")
var bcrypt = require('bcrypt')

module.exports = (function(){
	return {

		index: function(req, res){
			if(req.session.loggedIN == "TRUE"){
				res.redirect('/main')
			}
			else{
				// res.render('login', {json: res.users.username})
				res.redirect('/login')
			}
		},

		getUser : function(req, res){
			if(req.session.username){
				User.findOne({username: req.session.username}, function(err, user){
					if(err){
						res.json(err)
					}
					else{
						console.log("USERESRESRSER", user)
						res.json(user)
					}
				})
				
			}
			else{
				console.log("USER DOES NOT EXIST IN SESSION")
			}
		},


		login: function(req,res){
			console.log("IN LOGIN SERVER CONTROLLER - ", req.body)
			User.find({username: req.body.username}, function(err, result){
				if(result[0] === undefined || result[0].length == 0 || result[0].username === undefined){
					console.log("FOUDN RESULT - ", result)
					res.json({'alert': "Unable to find username"});
				}
				else{
					bcrypt.compare(req.body.password, result[0].password, function(err, isMatch){
						if(isMatch == false){
							res.json({'alert': 'Incorrect password'})
						}
						else{
							req.session.username = req.body.username
							console.log("REW SESSION - ", req.session)
							req.session.loggedIN = "TRUE";
							console.log("WHAT WE GETTNG BACK",result)
							res.json(result)
						}
					})
				}
			})

		},

		success : function(req, res){
			if(req.session.loggedIN == "TRUE"){
				res.render('/main')
			}
			else{
				res.redirect('/')
			}
		},


		signup : function(req, res){
			console.log("USER SERVER CONTROLLER - ", req.body.email)

			exist = User.findOne({username: req.body.username}, function(err, user){
				if(err){
					console.log(err)
				}
				else{
					if(user){
						console.log("Username already in system - ", user)
						res.json({'alert': 'Username already in the system'})
					}
					else{
						new_user = new User({
							username: req.body.username,
							email: req.body.email,
							password: req.body.password,
							firstname: req.body.firstname,
							lastname: req.body.lastname
						})
						new_user.save(function(err, user){
							if(err){
								res.redirect('signup', err)
							}
							else{
								req.session.loggedIN = "TRUE";
								req.session.name = req.body.username

								console.log("LOGGING IN THIS USER SESSION - ", req.session.loggedIN)
								console.log("ADDED A USER TO THE DB - ", user)
								res.json(user)						
							}
						})
					}
				}
			})
		},

		destroy: function(req, res){
			req.session.loggedIN = "FALSE";
			req.session.username = undefined
			console.log("REQ SESSION ", req.session.loggedIN)
			res.json(req.session.loggedIN)
		}

	}
})();


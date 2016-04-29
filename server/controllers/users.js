console.log("IN CONTROLLER USERS.JS FILE")

var mongoose = require("mongoose");

var User = mongoose.model("users")
var bcrypt = require('bcrypt')

module.exports = (function(){
	return {

		login: function(req,res){
			User.find({username: req.body.username}, function(err, result){
				if(result[0] === undefined || result[0].length == 0 || result[0].username === undefined){
					console.log("LOGIN RESULT - ", result[0])
					res.json({'alert': "Unable to find username"});
				}
				else{
					bcrypt.compare(req.body.password, result[0].password, function(err, isMatch){
						if(isMatch == false){
							res.json({'alert': 'Incorrect password'})
						}
						else{
							res.json(result)
						}
					})
				}
			})

		},

		signup : function(req, res){
			console.log("USER SERVER CONTROLLER - ", req.body.email)

			exist = User.findOne({username: req.body.username}, function(err, user){
				if(err){
					console.log(err)
				}
				else{
					if(user){
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

								res.json(user)						
							}
						})
					}
				}
			})
		},


	}
})();


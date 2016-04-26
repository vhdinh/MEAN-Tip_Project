console.log("IN CONTROLLER USERS.JS FILE")

var mongoose = require("mongoose");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model("users")

module.exports = (function(){
	return {


		signup : function(req, res){
			console.log("USER SERVER CONTROLLER - ", req.body.email)

			exist = User.findOne({email: req.body.email}, function(err, user){
				if(err){
					console.log(err)
				}
				else{
					if(user){
						console.log("Email already in system - ", user)
						res.json({'alert': 'Email already in the system'})
					}
					else{
						new_user = new User(req.body)
						new_user.save(function(err, user){
							if(err){
								console.log("Error when adding user")
								res.json({'alert': "Error when adding a user"})
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


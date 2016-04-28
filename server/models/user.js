console.log("IN MODELS USER.JS FILE");

var mongoose = require("mongoose");
var bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({
    username: {type: String, trim: true},
    password: {type: String, trim: true},
    email: {type: String, trim: true},
    firstname: {type: String, trim: true},
    lastname: {type: String, trim: true}
}, {timestamps: true});


//ASK KRIS - what is this

UserSchema.pre('save', function(next){
	var user = this;
	if(!user.isModified('password')){
		return next();
	} 

	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(user.password, salt, function(err, hash){
			user.password = hash;
			next();
		})
	})
})




UserSchema.path('username').required(true, 'Username cannot be blank');
UserSchema.path('password').required(true, 'Password cannot be blank');
UserSchema.path('email').required(true, 'Email cannot be blank');
UserSchema.path('firstname').required(true, 'First name cannot be blank');
UserSchema.path('lastname').required(true, 'Last Name cannot be blank');
	
mongoose.model("users", UserSchema);

console.log("IN SERVER.JS FILE")

var express = require("express");

var app = express();

var path = require('path');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
var session = require('express-session')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

var mongoose = require("mongoose");
require("./server/config/mongoose.js");

var User = mongoose.model("users")

passport.use(new LocalStrategy(
	function(username, password, done){
			console.log("@@@@ 2 username", username)
			console.log("@@@@ 2 password", password)
			console.log("@@@@ 2 done", done)

		User.findOne({username: username}, function(err, user){
				console.log("@@@@ 3")
			if(err){
				console.log("ERROR", err)
				return done(err)
			}
			if(!user) {
				console.log("Username not in DB", user)
				return done(null, false, {alert: 'incorrect username'})
			}
			if(user.password != password){
				console.log("Password not matching", user)
				return done(null, false, {alert: "incorrect password"});
			}
			console.log("FOUND USER", user)
			return done(null, user);
		})
	}
	))

passport.serializeUser(function(user, done){
	done(null, user)
})

passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user);
	});
});

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
	secret: "GOOD TIPPING",
	resave: true,
	saveUnintialized: false
}));



app.use(express.static(path.join(__dirname, "./node_modules")));

app.use(express.static(path.join(__dirname, "./client")));



require("./server/config/routes.js")(app);





function isAuthenticated(req, res, next){
	if(req.isAuthenticated())return next();
}




port = 8000
app.listen(port,function(){
	console.log("LISTEN TO PORT : ",port,"TIPPPPPPPPPP")
})


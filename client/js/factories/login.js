Tip_app.factory("LoginFactory", function($http, $location){
	var factory = {};
	factory.user = {};
	var priceOutcome;
	
	factory.login = function(info, callback){
		$http.post('/login', info).success(function(output){
			factory.user = output[0];
			console.log("after logging in", output[0])
			callback(factory.user)
		})
	}

	factory.getUser = function(callback){
		console.log("GETTTING USER OUTPUT asdfasdfds ")

		$http.get('/getuser').success(function(output){
			console.log("GETTTING USER OUTPUT ", output)
			user = output
			callback(user)
		})
	}

	factory.logout = function(){
		$http.get('/logout').success(function(output){
			console.log("logging out ouptput", output)
			if(output == "FALSE"){
				factory.user = {}
				$location.url('/login')
			}
		})
	}

	factory.signup = function(info, callback){
		// console.log("LOIGIN FACTORY signing up - ", info)
		$http.post('/signup', info).success(function(output){
			console.log("after singing in - ", output )
			factory.user = output;
			callback(factory.user)
		})
	}


	return factory
})

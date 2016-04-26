Tip_app.factory("LoginFactory", function($http){
	var factory = {};
	var user = {};
	var priceOutcome;
	// factory.user
	
	factory.getUser = function(){
		return user

	}

	

	factory.login = function(info, callback){
		$http.post('/login', info).success(function(output){
			user = output;
			// console.log("FACTORY PASSBACK - ", user)
			// console.log("CALLBACK IS ", callback)
			callback(user)
		})
	}

	// factory.logout = function(){
	// 	$http.get('/logout').success
	// }

	factory.signup = function(info, callback){
		// console.log("LOIGIN FACTORY signing up - ", info)
		$http.post('/signup', info).success(function(output){
			factory.user = output;
			console.log("after singing in - ", output )
			callback(factory.user)
		})
	}


	return factory
})

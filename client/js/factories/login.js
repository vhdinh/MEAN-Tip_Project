Tip_app.factory("LoginFactory", function($http, $location, $sessionStorage){
	var factory = {};
	factory.user = {};
	var priceOutcome;
	$sessionStorage.currUser;
	
	factory.login = function(info, callback){
		$http.post('/login', info).success(function(output){
			// factory.user = output[0];
			$sessionStorage.currUser = output[0]
			console.log("after logging in", output[0])
			callback(output[0])
		})
	}

	factory.getUser = function(){
		return $sessionStorage.currUser
	}

	factory.getLocation = function(){
		return $sessionStorage.currLoc
	}

	factory.logout = function(){
	$sessionStorage.currUser = null;
	$location.url('/login')
	}

	factory.signup = function(info, callback){
		$http.post('/signup', info).success(function(output){
			// factory.user = output;
			$sessionStorage.currUser = output
			callback(output)
		})
	}


	return factory
})

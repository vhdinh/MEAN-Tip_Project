Tip_app.factory("TipFactory", function($http){
	var factory = {};
	var tips = {};
	
	factory.getTips = function(info, callback){
		console.log("IN TIP FACTORY, ", info)
		$http.get('/getTips', info).success(function(output){
			tips = output;
			callback(tips)
		})
	}

	factory.happyPrice = function(info, callback){
		// console.log("CALLBACK - ", callback)
		// console.log("IN FACTORY - HAPPY PRICE - ",info)
		$http.post('/happyPrice', info).success(function(output){
			factory.priceOutcome = output
			callback(factory.priceOutcome)
		})
			
	}
	factory.sadPrice = function(info, callback){
		// console.log("CALLBACK - ", callback)
		// console.log("IN FACTORY - HAPPY PRICE - ",info)
		$http.post('/sadPrice', info).success(function(output){
			factory.priceOutcome = output
			callback(factory.priceOutcome)
		})
			
	}

	factory.dontCare = function(info, callback){
		// console.log("CALLBACK - ", callback)
		// console.log("IN FACTORY - HAPPY PRICE - ",info)
		$http.post('/dontCare', info).success(function(output){
			factory.priceOutcome = output
			callback(factory.priceOutcome)
		})
			
	}

	factory.removeTip = function(Tip, callback){
		// console.log("IN TIPFACTORY REMOVE TIP", Tip)
		$http.post('/removeTip', Tip).success(function(output){
			tips = output
			callback(tips)
		})
	}

	return factory
})
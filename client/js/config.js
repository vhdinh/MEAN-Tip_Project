console.log("IN CLIENT/JS/CONFIG.JS FILE")

var Tip_app = angular.module("myApp", ['ngRoute', 'ngStorage']);

Tip_app.config(function($routeProvider) {
	$routeProvider

	// LOGIN 
		.when('/login', {
			templateUrl: 'static/partials/login.html',
		})
		.when('/signup', {
			templateUrl: '/static/partials/signup.html',
		})

	// MAIN
		.when('/main', {
			templateUrl: 'static/partials/main.html',
		})

	// FOOD
		.when('/barista',{
			templateUrl: 'static/partials/food/barista.html',
		})
		.when('/bartender', {
			templateUrl: 'static/partials/food/bartender.html',
		})
		.when('/delivery', {
			templateUrl: '/static/partials/food/delivery.html',
		})

		.when('/takeout', {
			templateUrl: '/static/partials/food/takeout.html',
		})

	// HOTEL
		.when('/bellman', {
			templateUrl: '/static/partials/hotel/bellman.html',
		})
		.when('/concierge', {
			templateUrl: '/static/partials/hotel/concierge.html',
		})
		.when('/housekeeping', {
			templateUrl: '/static/partials/hotel/housekeeping.html',
		})
		.when('/roomService', {
			templateUrl: '/static/partials/hotel/roomService.html',
		})
		.when('/valet', {
			templateUrl: '/static/partials/hotel/valet.html',
		})

	// PERSONAL
		.when('/barber', {
			templateUrl: '/static/partials/personal/barber.html',
		})
		.when('/manicure', {
			templateUrl: '/static/partials/personal/mani.html',
		})
		.when('/massage', {
			templateUrl: '/static/partials/personal/massage.html',
		})
		.when('/shoe', {
			templateUrl: '/static/partials/personal/shoe.html',
		})
		.when('/spa', {
			templateUrl: '/static/partials/personal/spa.html',
		})

	// TRAVEL
		.when('/bus', {
			templateUrl: '/static/partials/travel/bus.html',
		})
		.when('/cab', {
			templateUrl: '/static/partials/travel/cab.html',
		})
		.when('/chauffeur', {
			templateUrl: '/static/partials/travel/chauffeur.html',
		})
		.when('/gas', {
			templateUrl: '/static/partials/travel/gas.html',
		})
		
	// ACCOUNT
		.when('/user', {
			templateUrl : '/static/partials/myAccount.html',
		})
		.otherwise({
			redirectTo: '/login'
		})
})

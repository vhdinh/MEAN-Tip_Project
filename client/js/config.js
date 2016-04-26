console.log("IN CLIENT/JS/CONFIG.JS FILE")

var Tip_app = angular.module("myApp", ['ngRoute']);

Tip_app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'static/partials/login.html',
			controller: "LoginController"
		})
		.when('/signup', {
			templateUrl: '/static/partials/signup.html',
			controller:"LoginController"
		})
		.when('/main', {
			templateUrl: 'static/partials/main.html',
			controller: "LoginController"
		})
		.when('/barista',{
			templateUrl: 'static/partials/food/barista.html',
			controller: "FoodController"
		})
		.when('/bartender', {
			templateUrl: 'static/partials/food/bartender.html',
			controller: "FoodController"
		})
		.when('/delivery', {
			templateUrl: '/static/partials/food/delivery.html',
			controller: "FoodController"
		})

		.when('/takeout', {
			templateUrl: '/static/partials/food/takeout.html',
			controller: "FoodController"
		})

		.when('/bellman', {
			templateUrl: '/static/partials/hotel/bellman.html',
			controller: "HotelController"
		})
		.when('/concierge', {
			templateUrl: '/static/partials/hotel/concierge.html',
			controller: "HotelController"
		})
		.when('/housekeeping', {
			templateUrl: '/static/partials/hotel/housekeeping.html',
			controller: "HotelController"
		})
		.when('/roomService', {
			templateUrl: '/static/partials/hotel/roomService.html',
			controller: "HotelController"
		})
		.when('/valet', {
			templateUrl: '/static/partials/hotel/valet.html',
			controller: "HotelController"
		})
		.when('/barber', {
			templateUrl: '/static/partials/personal/barber.html',
			controller: "PersonalController"
		})
		.when('/manicure', {
			templateUrl: '/static/partials/personal/mani.html',
			controller: "PersonalController"
		})
		.when('/massage', {
			templateUrl: '/static/partials/personal/massage.html',
			controller: "PersonalController"
		})
		.when('/shoe', {
			templateUrl: '/static/partials/personal/shoe.html',
			controller: "PersonalController"
		})
		.when('/spa', {
			templateUrl: '/static/partials/personal/spa.html',
			controller: "PersonalController"
		})
		.when('/bus', {
			templateUrl: '/static/partials/travel/bus.html',
			controller: "TravelController"
		})
		.when('/cab', {
			templateUrl: '/static/partials/travel/cab.html',
			controller: "TravelController"
		})
		.when('/chauffeur', {
			templateUrl: '/static/partials/travel/chauffeur.html',
			controller: "TravelController"
		})
		.when('/gas', {
			templateUrl: '/static/partials/travel/gas.html',
			controller: "TravelController"
		})
		.when('/user', {
			templateUrl : '/static/partials/myAccount.html',
			controller: "UserController"
		})
		.otherwise({
			redirectTo: '/login'
		})
})

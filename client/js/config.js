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
			templateUrl: 'static/partials/barista.html',
			controller: "FoodController"
		})
		.when('/bartender', {
			templateUrl: 'static/partials/bartender.html',
			controller: "FoodController"
		})
		.when('/delivery', {
			templateUrl: '/static/partials/delivery.html',
			controller: "FoodController"
		})

		.when('/takeout', {
			templateUrl: '/static/partials/takeout.html',
			controller: "FoodController"
		})

		.when('/user', {
			templateUrl : '/static/partials/myAccount.html',
			controller: "UserController"
		})
		.otherwise({
			redirectTo: '/login'
		})
})

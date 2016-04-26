console.log("IN CONTROLLER USERS.JS FILE")

var mongoose = require("mongoose");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model("users")
var Tip = mongoose.model("tips")

module.exports = (function(){
	return {
		getTips : function(req, res){
			console.log("Getting USER ID NSDFDSDS, ", req.body)
			// Tip.find({_user : req.body._id}).populate("_user").exec(function(err, tip){
			Tip.find({}).populate("_user").exec(function(err, tip){

				if(err){
					res.json(err)
				}
				else{
					res.json(tip)
				}
			})
		},

		removeTip: function(req, res){
			console.log("IN SERVERCONTROLLER REMOVE TIP, ",req.body)
			Tip.remove({_id : req.body._id}, function(err){
				if(err){
					res.json(err)
				}
				else{
					console.log("SUCcESSFULLY REMOVED TIP")
					res.redirect('/getTips')
				}
			})
		},

		happyPrice : function(req, res){
			console.log("HAPPY PRICE", req.body.user)
			new_tip = new Tip({
				_user : req.body.user, 
				price : req.body.price,
				tip : req.body.tip,
				tipPercent: req.body.tipPercent,
				total: req.body.totalPrice,
				service : req.body.service,
				mood: req.body.mood,
				location: req.body.location,
			})
			new_tip.save(function(err, tip){
				if(err){
					res.json(err)
				}
				else{
					res.json(tip)
				}
			})
		},

		sadPrice : function(req, res){
			console.log("Sad PRICE", req.body.user)
			new_tip = new Tip({
				_user : req.body.user, 
				price : req.body.price,
				tip : req.body.tip,
				tipPercent: req.body.tipPercent,
				total: req.body.totalPrice,
				service : req.body.service,
				mood: req.body.mood,
				location: req.body.location,
			})
			new_tip.save(function(err, tip){
				if(err){
					res.json(err)
				}
				else{
					res.json(tip)
				}
			})
		},  

		dontCare : function(req, res){
			console.log("DONTCARE PRICE", req.body.user)
			new_tip = new Tip({
				_user : req.body.user, 
				price : req.body.price,
				tip : req.body.tip,
				tipPercent: req.body.tipPercent,
				total: req.body.totalPrice,
				service : req.body.service,
				mood: req.body.mood,
				location: req.body.location,
			})
			new_tip.save(function(err, tip){
				if(err){
					res.json(err)
				}
				else{
					res.json(tip)
				}
			})
		},  

	}
})();

console.log("IN MONGOOSE.JS FILE")

var mongoose = require("mongoose");

var fs = require("fs");

mongoose.connect("mongodb://localhost/Tips");
mongoose.set('debug',true)
var models_path = __dirname + "/../models"


fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") > 0) {
		require(models_path + "/" + file);
	};
})


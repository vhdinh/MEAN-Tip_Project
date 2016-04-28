console.log("IN SERVER.JS FILE")

var express = require("express");
var session = require('express-session')

var app = express();

var path = require('path');

var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());
app.use(session({secret: "myTipApp"}));

app.use(express.static(path.join(__dirname, "./node_modules")));

app.use(express.static(path.join(__dirname, "./client")));


require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);



port = 8000
app.listen(port,function(){
	console.log("LISTEN TO PORT : ",port,"TIPPPPPPPPPP")
})


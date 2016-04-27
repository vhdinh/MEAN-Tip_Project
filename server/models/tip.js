console.log("IN MODELS USER.JS FILE");

var mongoose = require("mongoose");


var TipSchema = new mongoose.Schema({
	_user : {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    price: {type: String},
    tip: {type: String},
    tipPercent: {type: String},
    tipAmount : {type: String},
    total: {type: String},
    service: {type: String},
    mood: {type: String},
    location: {type: String},
}, {timestamps: true});


mongoose.model("tips", TipSchema);

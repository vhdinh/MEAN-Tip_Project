console.log("IN MODELS USER.JS FILE");

var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    username: {type: String, trim: true, required: true},
    password: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true},
    firstname: {type: String, trim: true, required: true},
    lastname: {type: String, trim: true, required: true}
}, {timestamps: true});


mongoose.model("users", UserSchema);

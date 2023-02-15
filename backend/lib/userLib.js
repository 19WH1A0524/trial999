const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callBack){
    try{
        var users = await userModel.find({});
        callBack(null, users) // error is null , gives users
    }
    catch(err){
        callBack(err, null) //error is displayed, no users
    }
}
module.exports.createFirstUser = async function(callBack){
    try{
        var user = {
            userName: "harshini",
            yearOfGraduation : 2023
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null, result);
    }
    catch(err){
        callBack(err, null) //error is displayed, no users
    }
}
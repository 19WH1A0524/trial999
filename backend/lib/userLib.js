const userModel = require("../models/userModel");

module.exports.getAllUsers = async function (callBack) {
    try {
        var users = await userModel.find({ isDelete: false });
        callBack(null, users) // error is null , gives users
    }
    catch (err) {
        callBack(err, null) //error is displayed, no users
    }
}
module.exports.createFirstUser = async function (callBack) {
    try {
        var user = {
            userName: "harshini",
            yearOfGraduation: 2023
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null, result);
    }
    catch (err) {
        callBack(err, null) //error is displayed, no users
    }
}
module.exports.createUser = async function (user, callBack) {
    try {
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null, result);
    }
    catch (err) {
        callBack(err, null) //error is displayed, no users
    }
}

module.exports.updateUser = async function (username, data, callBack) {
    try {
        var query = {
            userName: username,
        };
        // var data = {
        //     yearOfGraduation : data,
        // };
        var result = await userModel.updateOne(query, data);
        callBack(null, result);
    }
    catch (err) {
        callBack(err, null)
    }
}
module.exports.getUserByFilter = async function (filter, callBack) {
    try {
        var result = await userModel.findOne(filter);
        callBack(null, result);
    }
    catch (err) {
        callBack(err, null);
    }
}

module.exports.deleteUser = async function (username, callBack) {
    try {
        var query = {
            userName: username,
        };
        // var result = await userModel.deleteOne(query, data); // hard delete
        var result = await userModel.updateOne(query, { isDeleted: true });//soft delete
        callBack(null, result);
    }
    catch (err) {
        callBack(err, null);
    }
}


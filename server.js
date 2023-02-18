require('dotenv').config(); //.env
const userLib = require('./backend/lib/userLib');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5010;
// const connectionString = process.env.MONGO_CONNECTION_STRING;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}
app.use(express.static("public",options));
app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

app.get("/resume", function(req, res){
	res.sendFile(__dirname+"/public/resume.html");
});

app.get("/card", function(req, res){
	res.sendFile(__dirname+"/public/card.html");
});
app.get("/weather", function(req, res){
	res.sendFile(__dirname+"/weather.html");
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function (err) { // we are tring to connect if cannot error 
	if (err) {
		console.error(err);
	}
	else {
		console.log('Connected to database');
		// TODO : donot create a user if atleast 1 user exist in the table
		// userLib.createFirstUser(function(err, res) {
		//     if (err) {
		//         //console.error(err);
		//     } else {
		//         console.log(res);
		//     }
		// });
		// userLib.createUser({userName: "bz",yearOfGraduation: 2025}, function(err,res){
		// 	if (err) {
		// 		        //console.error(err);
		// 		    } else {
		// 		        console.log(res);
		// 		    }
		// })
		// userLib.updateUser(function(err,res){
		// 	if (err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(res)
		// 	}
		// })
		// })

		userLib.deleteUser("harshini", function (err, result) {
			if (err) {
				console.error(err);
			}
			else {
				console.log(result);
			}
		})
		// userLib.getUserByFilter({userName : "harshini"}, function(err,res){
		// 	if(err){
		// 		console.error(err);

		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// })
		// userLib.getAllUsers(function(err,res){
		// 	if (err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(res)
		// 	}
		// })
		app.listen(port, function () {
			// console.log('Server started on port ' + port);
			console.log(`Server running on http://localhost:${port}`);
		});

	}
});

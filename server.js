require('dotenv').config(); //.env
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const connectionString = process.env.MONGO_CONNECTION_STRING;
app.get("/", function(req, res){
	// res.send("I am me"); 
	// res.sendFile(__dirname+"/simple.html")
	res.sendFile(__dirname+"/resume.html")
	// res.sendFile(__dirname+"/card.html")
});
app.get("/card", function(req, res){
	
	res.sendFile(__dirname+"/card.html")
});
mongoose.set('strictQuery', true);
mongoose.connect(connectionString, {}, function(err){ // we are tring to connect if cannot error 
	if (err){
		console.error(err);
	}
	else{
		console.log("DB Connected-------------")
		app.listen(port, function(){
			// console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});

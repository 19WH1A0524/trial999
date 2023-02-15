require('dotenv').config(); //.env
const userLib = require('./backend/lib/userLib');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5010;
// const connectionString = process.env.MONGO_CONNECTION_STRING;
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
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err){ // we are tring to connect if cannot error 
	if (err){
		console.error(err);
	}
	else{
		console.log('Connected to database');
        // TODO : donot create a user if atleast 1 user exist in the table
        userLib.createFirstUser(function(err, res) {
            if (err) {
                //console.error(err);
            } else {
                console.log(res);
            }
        });
        app.listen(port, function() {
            // console.log('Server started on port ' + port);
			console.log(`Server running on http://localhost:${port}`);
        });
		
	}
});

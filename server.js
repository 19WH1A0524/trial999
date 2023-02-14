const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	// res.send("I am me"); this is me 
	// res.sendFile(__dirname+"/index.html")
	res.sendFile(__dirname+"/resume.html")
});

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});

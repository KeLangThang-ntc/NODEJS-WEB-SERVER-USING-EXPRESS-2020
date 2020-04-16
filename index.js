var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(req,res){
	res.send('<h1>Hello world</h1>');
})
app.listen(port, function(){
	console.log('Server listening on port' + port);
});
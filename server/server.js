var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('dotenv').config();

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {  
    res.send('Welcome to JavaTpoint!');  
  });  
  var server = app.listen(8000, function () {  
    var host = server.address().address;  
    var port = server.address().port;  
    console.log('Example app listening at http://%s:%s', host, port);  
  });  

mongoose.connect(process.env.URI);

app.post('/users', function (req) {  
    //res.send('Welcome to JavaTpoint!'); 
    var reqBody = req.body;
    console.log(reqBody["user"]);
    
    const userSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String
      });

    var username = reqBody["username"];
    var email = reqBody["email"];
    var password = reqBody["password"];
    
    const user = mongoose.model('user', userSchema);
    
    const person = new user({ username: username, email: email, password: password});
    console.log(person.username); 
    person.save();
  });  


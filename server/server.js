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

// Define the userSchema and create the Mongoose model once
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema); // Use 'User' instead of 'user'

app.post('/users', function (req, res) {
    var reqBody = req.body;
    var username = reqBody["username"];
    var email = reqBody["email"];
    var password = reqBody["password"];
  
    const person = new User({ username: username, email: email, password: password });
    console.log(person.username);
    person.save()
      .then(() => {
        res.json({ message: 'User created successfully' }); // Send a JSON response
      })
      .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creating user' }); // Send a JSON response
      });
  });
  

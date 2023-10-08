const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(express.json());

// Connect to your MongoDB cluster
const uri = 'mongodb+srv://root:Grape56Purple@questly.qjkpbts.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle user registration
app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validate input (add more validation as needed)
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Please provide valid username, password, and email.' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user data into MongoDB
    const database = client.db('Questly');
    const collection = database.collection('Users');

    const user = {
      username,
      password: hashedPassword,
      email,
    };

    const result = await collection.insertOne(user);

    res.status(201).json({ message: 'Registration successful!', insertedId: result.insertedId });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Registration failed.' });
  }
});

// Start the server
async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('Questly');
    const collection = database.collection('Users');

    // Define your API routes and MongoDB interactions here

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

main().catch(console.error);


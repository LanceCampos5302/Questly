import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import axios from 'axios'; // Import Axios for making HTTP requests
import { globalStyles, resetStyles } from '../AppStyles';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    try {
      // Validate input (you can add more validation logic here)
      if (username === '' || password === '' || passConfirm === '' || email === '') {
        console.log('Please fill in all fields.');
        return;
      }

      if (password !== passConfirm) {
        console.log('Passwords do not match.');
        return;
      }

      // Create an object with user registration data
      const userData = {
        username,
        password,
        email,
      };

      // Send a POST request to your server for user registration
      const response = await axios.post('http://your-server-ip:3000/register', userData);

      // Handle the response from the server (e.g., display a success message or navigate to the login page)
      console.log('Registration successful!', response.data);

    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <View style={[styles.background]}>
      <Text style={[styles.text]}>Questly</Text>
      <View style={[styles.Look_Box]}>
        <TextInput
          style={styles.User_input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setPassConfirm}
          value={passConfirm}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up!</Text>
        </TouchableOpacity>
        <Text style={[styles.blue_text]}>Have an account? Log in!</Text>
      </View>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  backround:{
    width: '100%',
    height: '100%',
    backgroundColor: globalStyles.secondaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blue_text: {//to be changed later for sign up hyperlink
    marginTop: 10,
    fontSize: 20,
    fontWeight: '300',
    color: 'blue',
    marginBottom: 10,
    fontFamily:'serif',
  },
  text: {//text for Questly
    fontSize: 70,
    fontWeight: '300',
    color: globalStyles.secondaryColor,
    marginBottom: 50,
    fontFamily:'serif',
  },
  Title: {
    fontsize: 100,
    fontWeight: 'bold',
    color: globalStyles.primaryColor,
    //fontFamily: 'serif', 
  },
  Look_Box: {//creates an outer box
    height: 400,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    color: globalStyles.primaryColor,
    marginBottom: 100,
    borderWidth: 1,
    backgroundColor: globalStyles.primaryColor,
    padding: 10,
  },
  User_input: {//box for username
    height: 40,
    width: 200,
    marginVertical:30,
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: globalStyles.primaryColor,
    padding: 10,
  },
  input: {//box for password
    height: 40,
    backgroundColor: globalStyles.primaryColor,
    width: 200,
    marginVertical:10,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    height: 50,
    width: 250,
    backgroundColor: globalStyles.popColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },

});

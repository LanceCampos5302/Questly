import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Pass_confirm, setconfirm] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    const data = {
      username,
      email,
      password,
    };
    console.log(username);
    console.log(email);
    console.log(password);

    // Make a POST request to your server
    fetch('http://10.0.2.2:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        // Handle the server response as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors
      });
  };

  return (
    <View style={[styles.backround]}>
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
          onChangeText={setconfirm}
          value={Pass_confirm}
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
  backround:{//outermost container controls
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
    color: globalStyles.blackColor,
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
    height: 50, // Increase this value for taller button
    width: 250, // Increase this value for wider button
    backgroundColor: globalStyles.popColor, // Set your desired color here
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },

});

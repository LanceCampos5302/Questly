
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles'
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const SignUpLink = () => {
    navigation.navigate('SignUp');
  }

  const LoginSuccess = () => {
    navigation.navigate('QuestPage');
  }

  const handleLogin = () => {
    console.log(username);
    console.log(password);
  
    // Send user data in the request body
    fetch('http://10.0.2.2:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify({ username, password }), // Send username and password as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'User created successfully') {
          console.log('Login successful');
          LoginSuccess();
        } else {
          console.log('User not found or incorrect password');
          // Handle user not found or incorrect password
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors
      });
  
    console.log(username, password);
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
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={[styles.blue_text]} onPress={() => SignUpLink()}>No login? Sign up!</Text>
    </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  backround:{//outermost container controls
    width: '100%',
    height: '100%',
    backgroundColor: globalStyles.secondaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blue_text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '300',
    color: 'blue',
    fontFamily:'serif',
    textDecorationLine: 'underline',
  },
  text: {//text for Questly
    fontSize: 70,
    fontWeight: '300',
    color: globalStyles.popColor,
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
    height: 295,
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
    padding: 10,
  },
  input: {//box for password
    height: 40,
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

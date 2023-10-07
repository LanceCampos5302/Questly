import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles'
//imports needs for login functions



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can call your API to log in the user with username and password
    console.log(username, password);
  }

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Questly</Text>

      <View style={[styles.Look_Box]}>  
      
      <TextInput
        style={styles.input}
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
    </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
    
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: globalStyles.primaryColor,
    marginBottom: 16,
  },
  Title: {
    fontsize: 100,
    fontWeight: 'bold',
    color: globalStyles.primaryColor,
    //fontFamily: 'cochin', 
    
  },
  Look_Box: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    color: globalStyles.primaryColor,
    marginBottom: 20,
    borderWidth: 10,
    padding: 10,
  },


  input: {
    height: 40,
    width: 200,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

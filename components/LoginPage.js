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
    <View style={[styles.backround]}>

    

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
    
      <Button title="Login" onPress={handleLogin} />
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
  text: {
    fontSize: 70,
    fontWeight: '300',
    color: globalStyles.primaryColor,
    marginBottom: 100,
    fontFamily:'serif',
  },
  Title: {
    fontsize: 100,
    fontWeight: 'bold',
    color: globalStyles.primaryColor,
    //fontFamily: 'serif', 
  },
  Look_Box: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    color: globalStyles.primaryColor,
    marginBottom: 120,
    borderWidth: 1,
    backgroundColor: globalStyles.primaryColor,
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

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles'

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
  input: {
    height: 40,
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

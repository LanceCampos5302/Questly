import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles'




const LoginPage = () => {
  return (
    <View style={[resetStyles.resetStyles]}>
        <Text style={[styles.text]}>Questly</Text>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: globalStyles.primaryColor,
  },
  paper:{
    fontSize: 16,
    fontWeight: 'bold',
  }
});
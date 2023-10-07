import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles'
import MenuNav from './MenuNav';

const MenuPage = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
        <Text style={[styles.text]}>Menu</Text>
        <MenuNav></MenuNav>
    </View>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
      backgroundColor: "white",
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
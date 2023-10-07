import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles'

const MenuNav = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
        <View style={[styles.text]}>
          <View>
            <Text>IIII</Text>
          </View>
          <View>
            <Text>IIII</Text>
          </View>
          <View>
            <Text>Mega</Text>
          </View>
          <View>
            <Text>IIII</Text>
          </View>
          <View>
            <Text>IIII</Text>
          </View>
        </View>
    </View>
  );
};

export default MenuNav;

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
  width: '100%',
  height: '10%',
  bottom: 0,
  backgroundColor: globalStyles.primaryColor,
  justifyContent: 'center',
  alignItems: 'center',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: globalStyles.secondaryColor,
    }
  });
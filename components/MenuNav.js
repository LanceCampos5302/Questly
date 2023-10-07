import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';

const MenuNav = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
      <View style={styles.text}>
        <View style={styles.navSection}>
          <Text>Profile</Text>
        </View>
        <View style={styles.navMidSection}>
          <Text>Quest</Text>
        </View>
        <View style={styles.navSection}>
          <Text>Radar</Text>
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
    height: '12%',
    bottom: 0,
    backgroundColor: globalStyles.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navSection: {
    flex: 1,
    height: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navMidSection: {
    flex: 1,
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
